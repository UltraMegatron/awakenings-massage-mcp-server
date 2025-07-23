import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  location: "Your City, State",
  phone: "+1-555-123-4567",
  email: "contact@awakenings.com",
  website: "https://awakeningsmassagecos.com",
  instagramHandle: "@awakenings_massage",
  facebookPage: "AwakeningsMassage"
};

const generator = new ContentGenerator(businessInfo);

console.log("🧘 RELAXATION POST:");
console.log(JSON.stringify(generator.generateMassageTherapyPost("relaxation", "instagram"), null, 2));

console.log("\n💪 PAIN RELIEF POST:");
console.log(JSON.stringify(generator.generateMassageTherapyPost("pain_relief", "facebook"), null, 2));

console.log("\n🎉 PROMOTIONAL POST:");
console.log(JSON.stringify(generator.generatePromotionalPost("20% off first massage this month!", "both"), null, 2));

console.log("\n📚 EDUCATIONAL POST:");
console.log(JSON.stringify(generator.generateEducationalPost("benefits", "instagram"), null, 2));

console.log("\n📅 WEEKLY SCHEDULE:");
const weeklyPosts = generator.generateWeeklySchedule();
console.log(`Generated ${weeklyPosts.length} posts for the week`);
weeklyPosts.forEach((post, index) => {
  console.log(`Day ${index + 1}: ${post.platform} - ${post.caption.substring(0, 50)}...`);
});