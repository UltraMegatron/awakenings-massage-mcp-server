import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  phone: "+1-555-123-4567",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("📅 TESTING MONTHLY CONTENT GENERATION:");

// Test current month
const monthlyPosts = generator.generateMonthlySchedule();
console.log(`Generated ${monthlyPosts.length} posts for the current month`);

console.log("\n🗓️ WEEKLY BREAKDOWN:");
console.log("Week 1: Relaxation & Stress Relief");
console.log("Week 2: Pain Relief & Therapeutic Benefits");
console.log("Week 3: Sports Recovery & Active Lifestyle"); 
console.log("Week 4: Wellness & Self-Care");

console.log("\n📝 SAMPLE POSTS FROM EACH WEEK:");

// Show sample from each week
const samplesPerWeek = [
  { week: 1, days: [0, 2] },
  { week: 2, days: [7, 9] },
  { week: 3, days: [14, 16] },
  { week: 4, days: [21, 23] }
];

samplesPerWeek.forEach(({ week, days }) => {
  console.log(`\n--- WEEK ${week} SAMPLES ---`);
  days.forEach(dayIndex => {
    if (monthlyPosts[dayIndex]) {
      const post = monthlyPosts[dayIndex];
      console.log(`Day ${dayIndex + 1} (${post.platform}):`);
      console.log(`Caption: ${post.caption.substring(0, 100)}...`);
      console.log(`Hashtags: ${post.hashtags.slice(0, 3).join(', ')}...`);
      console.log('');
    }
  });
});

console.log(`\n✅ Total posts generated: ${monthlyPosts.length}`);