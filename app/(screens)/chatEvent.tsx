import {
  Camera,
  Contact,
  ImageIcon,
  Send,
  ShieldAlert,
} from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Clipboard,
  FlatList,
  Image,
  KeyboardAvoidingView,
  PanResponder,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Message = {
  id: string;
  text: string;
  sender: "me" | "them";
  time: string;
  read?: boolean;
  createdAt: number;
  replyTo?: Message;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey 👋",
      sender: "them",
      time: "10:21 AM",
      createdAt: Date.now() - 100000,
    },
    {
      id: "2",
      text: "You look amazing today 😄",
      sender: "me",
      time: "10:22 AM",
      read: true,
      createdAt: Date.now() - 90000,
    },
    {
      id: "3",
      text: "Haha thank you 😊",
      sender: "them",
      time: "10:23 AM",
      createdAt: Date.now() - 80000,
    },
  ]);

  const [input, setInput] = useState("");
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [timerEnd, setTimerEnd] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>("");

  const listRef = useRef<FlatList<Message>>(null);

  useEffect(() => {
    if (timerEnd) {
      const interval = setInterval(() => {
        const now = Date.now();
        const diff = timerEnd - now;
        if (diff <= 0) {
          setTimeLeft("Time's up!");
          clearInterval(interval);
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerEnd]);

  // Map to hold animated values per message (fixes hook issue)
  const translateXRefs = useRef<{ [key: string]: Animated.Value }>({}).current;

  const onSend = () => {
    if (!input.trim()) return;

    const now = new Date();
    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "me",
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      read: false,
      createdAt: Date.now(),
      replyTo: replyingTo ? replyingTo : undefined,
    };

    if (editingId) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === editingId ? { ...msg, text: input } : msg,
        ),
      );
      setEditingId(null);
    } else {
      setMessages((prev) => [...prev, newMessage]);
      if (!timerEnd) {
        setTimerEnd(Date.now() + 3 * 60 * 60 * 1000); // 3 hours
      }
    }

    setInput("");
    setReplyingTo(null);

    setTimeout(() => {
      listRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleLongPress = (message: Message) => {
    const options = ["Copy", "Delete"];
    const now = Date.now();
    if (message.sender === "me" && now - message.createdAt <= 5 * 60 * 1000) {
      options.push("Edit");
    }

    Alert.alert("Message options", "", [
      ...options.map((option) => ({
        text: option,
        onPress: () => {
          if (option === "Copy") Clipboard.setString(message.text);
          if (option === "Delete")
            setMessages((prev) => prev.filter((m) => m.id !== message.id));
          if (option === "Edit") {
            setInput(message.text);
            setEditingId(message.id);
            listRef.current?.scrollToEnd({ animated: true });
          }
        },
      })),
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isMe = item.sender === "me";

    // Initialize Animated.Value for this message if not exists
    if (!translateXRefs[item.id]) {
      translateXRefs[item.id] = new Animated.Value(0);
    }
    const translateX = translateXRefs[item.id];

    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10,
      onPanResponderMove: (_, gesture) => {
        if (!isMe && gesture.dx < 0) {
          translateX.setValue(gesture.dx);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (!isMe && gesture.dx < -50) {
          setReplyingTo(item);
        }
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    });

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.messageWrapper,
          isMe ? styles.myWrapper : styles.theirWrapper,
          { transform: [{ translateX }] },
        ]}
      >
        <TouchableOpacity onLongPress={() => handleLongPress(item)}>
          <View
            style={[styles.bubble, isMe ? styles.myBubble : styles.theirBubble]}
          >
            {item.replyTo && (
              <View style={styles.replyPreview}>
                <Text style={styles.replySender}>
                  {item.replyTo.sender === "me" ? "You" : "Them"}
                </Text>
                <Text style={styles.replyTextPreview} numberOfLines={1}>
                  {item.replyTo.text}
                </Text>
              </View>
            )}
            <Text style={isMe ? styles.myText : styles.theirText}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.time}>
          {item.time} {isMe && item.read ? "• Read" : ""}
        </Text>
      </Animated.View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.avatar}
            />
            <View style={styles.onlineDot} />
          </View>

          <View style={{ marginLeft: 12 }}>
            <Text style={styles.name}>Sophia</Text>
            <Text style={styles.status}>
              {timerEnd ? `⏱ ${timeLeft} to plan date` : "Active now"}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <ShieldAlert size={21} color="#444" />
        </TouchableOpacity>
      </View>

      {/* CHAT */}
      <FlatList
        ref={listRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 14 }}
      />

      {/* REPLY BAR */}
      {replyingTo && (
        <View style={styles.replyBar}>
          <Text style={styles.replyText}>Replying to: {replyingTo.text}</Text>
          <TouchableOpacity onPress={() => setReplyingTo(null)}>
            <Text style={styles.cancelReply}>✕</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* INPUT */}
      <View style={styles.bottomWrap}>
        <View style={styles.inputBar}>
          <TouchableOpacity style={styles.icon}>
            <ImageIcon size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Contact size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Camera size={20} color="#666" />
          </TouchableOpacity>

          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Message..."
            multiline
            style={styles.input}
          />

          <TouchableOpacity onPress={onSend}>
            <Send size={22} color={input.trim() ? "#ff4458" : "#bbb"} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
  },

  headerLeft: { flexDirection: "row", alignItems: "center" },

  avatar: { width: 46, height: 46, borderRadius: 23 },

  onlineDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#34C759",
    position: "absolute",
    bottom: 1,
    right: 1,
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: { fontSize: 18, fontWeight: "600" },

  status: { fontSize: 12, color: "#888", marginTop: 2 },

  messageWrapper: { paddingHorizontal: 16, marginVertical: 5 },

  myWrapper: { alignItems: "flex-end" },

  theirWrapper: { alignItems: "flex-start" },

  bubble: {
    maxWidth: "78%",
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 20,
  },

  myBubble: { backgroundColor: "#ff4458", borderBottomRightRadius: 7 },

  theirBubble: { backgroundColor: "#f2f2f7", borderBottomLeftRadius: 7 },

  myText: { color: "#fff", fontSize: 16 },

  theirText: { color: "#111", fontSize: 16 },

  time: { fontSize: 11, color: "#999", marginTop: 4, paddingHorizontal: 5 },

  bottomWrap: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    backgroundColor: "#fff",
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  icon: { marginRight: 10 },

  input: { flex: 1, fontSize: 16, marginRight: 10 },

  replyBar: {
    backgroundColor: "#f2f2f7",
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  replyText: { flex: 1, color: "#333", fontSize: 14 },

  cancelReply: { color: "#ff4458", fontSize: 16, marginLeft: 8 },

  replyIndicator: { fontSize: 10, color: "#666", marginBottom: 3 },

  replyPreview: {
    borderLeftWidth: 3,
    borderLeftColor: "#ff4458",
    paddingLeft: 8,
    marginBottom: 4,
  },

  replySender: { fontSize: 12, fontWeight: "600", color: "#555" },
  replyTextPreview: { fontSize: 14, color: "#777" },
});
