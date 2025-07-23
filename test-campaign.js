import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  phone: "+1-555-123-4567",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("🚀 TESTING CAMPAIGN GENERATION:");

// Test 7-day weekly campaign
const campaign = generator.generateCampaign("Spring Wellness Campaign", 7, "weekly");

console.log(`Campaign: ${campaign.name}`);
console.log(`Duration: ${campaign.startDate.toDateString()} to ${campaign.endDate.toDateString()}`);
console.log(`Frequency: ${campaign.frequency}`);
console.log(`Total Posts: ${campaign.posts.length}`);

console.log("\nFirst 3 posts preview:");
campaign.posts.slice(0, 3).forEach((post, index) => {
  console.log(`\nPost ${index + 1} (${post.platform}):`);
  console.log(`Caption: ${post.caption.substring(0, 80)}...`);
  console.log(`Hashtags: ${post.hashtags.slice(0, 4).join(', ')}...`);
});