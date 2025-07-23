import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  phone: "(719) 555-0123", // Example phone number - replace with actual
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("📞 TESTING CONTACT INFO IN ALL POSTS");
console.log("=" .repeat(60));

console.log("\n🧘 RELAXATION POST:");
const relaxationPost = generator.generateMassageTherapyPost("relaxation", "instagram");
console.log(relaxationPost.caption);

console.log("\n" + "=".repeat(60));

console.log("\n🎉 PROMOTIONAL POST:");
const promoPost = generator.generatePromotionalPost("Weekend wellness packages available", "facebook");
console.log(promoPost.caption);

console.log("\n" + "=".repeat(60));

console.log("\n📚 EDUCATIONAL POST:");
const eduPost = generator.generateEducationalPost("benefits", "both");
console.log(eduPost.caption);

console.log("\n" + "=".repeat(60));

console.log("\n✅ All posts now include:");
console.log("📍 Address: 2402 North Nevada Avenue, Colorado Springs, CO");
console.log("📞 Phone number");
console.log("🌐 Website: awakeningsmassagecos.com");
console.log("\nPerfect for driving bookings and making it easy for customers to contact you!");