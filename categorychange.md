ঠিক আছে, ধরি তুমি "Documentary" ক্যাটাগরিটা বন্ধ করতে চাও — উদাহরণ হিসেবে সেটা দিয়ে দেখাচ্ছি। একই পদ্ধতি যেকোনো ক্যাটাগরির জন্য কাজ করবে, শুধু নামটা বদলে নিও।
(src/components/Portfolio.tsx)
- const categories = ["Reels", "Talking Head", "Saas Animation", "Motion Graphics", "Personal Brand"]; 
+ const categories = ["Reels", "Talking Head", "Saas Animation", "Motion Graphics", "Personal Brand"];

(এই ফাইলে "Documentary" এমনিতেই নেই, তাই এখানে কিছু বদলাতে হবে না — এই ধাপটা শুধু তখনই দরকার যখন যেই ক্যাটাগরি বন্ধ করছ সেটা এই অ্যারেতে থাকে)

(src/pages/PortfolioPage.tsx)
- const categories = ["Reels", "Talking Head", "Saas Animation", "Documentary", "Motion Graphics", "Personal Brand"];
+ const categories = ["Reels", "Talking Head", "Saas Animation", "Motion Graphics", "Personal Brand"];

(src/pages/AdminPage.tsx)
- {["All", "Reels", "Commercial", "Saas Animation", "Motion Graphics", "Documentary", "Personal Brand"].map((cat) => (
+ {["All", "Reels", "Commercial", "Saas Animation", "Motion Graphics", "Personal Brand"].map((cat) => (

(src/pages/AdminPage.tsx)
    <!-- <option value="Motion Graphics">Motion Graphics</option>
       <option value="Documentary">Documentary</option>
    <option value="Personal Brand">Personal Brand</option>
  <!-- </select> --> -->

⚠️ কোড বদলানোর আগে যেটা করতে হবে (এটা কোড না, ডেটা):
src/lib/dataStore.ts-এ যেসব প্রজেক্টের category: "Documentary" আছে (যেমন লাইন ১৬২-এর কাছে), সেগুলোর category ম্যানুয়ালি অন্য কিছুতে বদলে দিতে হবে —
-    category: "Documentary",
+    category: "Talking Head",

Same As When You add new Category