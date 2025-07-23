import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  phone: "+1-555-123-4567",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("📅 UPDATED MONTHLY CONTENT GENERATION:");
console.log("✨ 12 posts per month (3 posts per week) ✨\n");

const monthlyPosts = generator.generateMonthlySchedule();

console.log(`📊 Total Posts Generated: ${monthlyPosts.length}\n`);

console.log("🗓️ WEEKLY CONTENT PLAN:");
const weeks = [
  { name: "Week 1: Relaxation & Stress Relief", posts: monthlyPosts.slice(0, 3) },
  { name: "Week 2: Pain Relief & Therapeutic Benefits", posts: monthlyPosts.slice(3, 6) },
  { name: "Week 3: Sports Recovery & Active Lifestyle", posts: monthlyPosts.slice(6, 9) },
  { name: "Week 4: Wellness & Self-Care", posts: monthlyPosts.slice(9, 12) }
];

weeks.forEach((week, weekIndex) => {
  console.log(`\n--- ${week.name.toUpperCase()} ---`);
  week.posts.forEach((post, postIndex) => {
    console.log(`\nPost ${weekIndex * 3 + postIndex + 1} (${post.platform.toUpperCase()}):`);
    console.log(`Caption: ${post.caption.substring(0, 120)}...`);
    console.log(`Hashtags: ${post.hashtags.slice(0, 4).join(', ')}...`);
  });
});

console.log("\n🎯 CONTENT BREAKDOWN:");
const platforms = monthlyPosts.reduce((acc, post) => {
  acc[post.platform] = (acc[post.platform] || 0) + 1;
  return acc;
}, {});

Object.entries(platforms).forEach(([platform, count]) => {
  console.log(`${platform.toUpperCase()}: ${count} posts`);
});

console.log("\n✅ Perfect! 12 strategic posts per month for Awakenings Massage Company!");