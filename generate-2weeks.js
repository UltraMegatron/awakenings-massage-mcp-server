import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  phone: "+1-555-123-4567",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("📅 2-WEEK CONTENT PLAN FOR AWAKENINGS MASSAGE COMPANY");
console.log("=" .repeat(60));

// Generate first 6 posts from monthly schedule (2 weeks worth)
const monthlyPosts = generator.generateMonthlySchedule();
const twoWeeksPosts = monthlyPosts.slice(0, 6);

console.log(`📊 Generated ${twoWeeksPosts.length} posts for 2 weeks\n`);

// Week 1: Relaxation & Stress Relief
console.log("🌟 WEEK 1: RELAXATION & STRESS RELIEF");
console.log("-".repeat(50));

twoWeeksPosts.slice(0, 3).forEach((post, index) => {
  console.log(`\n📝 POST ${index + 1} - ${post.platform.toUpperCase()}`);
  console.log(`Caption:\n${post.caption}\n`);
  console.log(`Hashtags: ${post.hashtags.join(' ')}\n`);
  console.log("=" .repeat(40));
});

// Week 2: Pain Relief & Therapeutic Benefits  
console.log("\n💪 WEEK 2: PAIN RELIEF & THERAPEUTIC BENEFITS");
console.log("-".repeat(50));

twoWeeksPosts.slice(3, 6).forEach((post, index) => {
  console.log(`\n📝 POST ${index + 4} - ${post.platform.toUpperCase()}`);
  console.log(`Caption:\n${post.caption}\n`);
  console.log(`Hashtags: ${post.hashtags.join(' ')}\n`);
  console.log("=" .repeat(40));
});

console.log("\n✅ READY TO POST! Copy and paste these into Instagram and Facebook!");
console.log("📱 Remember to add relevant images or use Canva integration when available.");