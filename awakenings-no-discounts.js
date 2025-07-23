import { ContentGenerator } from './dist/services/contentGenerator.js';

const businessInfo = {
  name: "Awakenings Massage Company",
  type: "massage_therapy",
  description: "Professional massage therapy services for relaxation and wellness",
  location: "Colorado Springs, CO",
  address: "2402 North Nevada Avenue, Colorado Springs, CO",
  website: "https://awakeningsmassagecos.com"
};

const generator = new ContentGenerator(businessInfo);

console.log("🌟 UPDATED PROMOTIONAL POSTS - NO DISCOUNTS");
console.log("🏔️ Focus: Memberships & Add-ons for Awakenings Massage Company");
console.log("=" .repeat(70));

// Updated promotional posts with membership focus and add-ons
const promotionalPosts = [
  {
    type: "Professional Excellence",
    platform: "both",
    caption: "✨ Welcome to Awakenings Massage Company ✨\n\nDiscover tranquility in the heart of Colorado Springs. Our elegant massage therapy sanctuary at 2402 North Nevada Avenue is designed for your complete wellness journey.\n\n🌟 Experience the difference that professional, personalized care makes:\n• Licensed therapeutic massage specialists\n• Customized treatment plans for your needs\n• Serene, spa-like environment\n• Commitment to your wellness goals\n\nYour body deserves the highest standard of care.\n\n📍 2402 North Nevada Avenue, Colorado Springs\n🌐 awakeningsmassagecos.com\n📞 Book your appointment today!",
    hashtags: ["#AwakeningsMassage", "#ColoradoSprings", "#ProfessionalMassage", "#MassageTherapy", "#WellnessJourney", "#Relaxation", "#Colorado", "#NevadaAvenue", "#TherapeuticMassage"],
    visualSuggestion: "Elegant spa interior shot from website, soft lighting, professional treatment room"
  },
  {
    type: "Membership Benefits",
    platform: "both",
    caption: "🌟 Introducing Awakenings Massage Membership 🌟\n\nPrioritize your wellness with our exclusive membership program designed for consistent self-care.\n\n✨ Membership Benefits:\n• Priority booking for your preferred appointment times\n• Exclusive member-only relaxation amenities\n• Complimentary wellness consultations\n• Access to specialized therapeutic programs\n• Flexible scheduling options\n\nConsistent care leads to lasting wellness results. Your body thrives on regular therapeutic attention.\n\n🏔️ Located at 2402 North Nevada Avenue, Colorado Springs\n🌐 Learn more at awakeningsmassagecos.com\n📞 Ask about membership options when you call!",
    hashtags: ["#AwakeningsMembership", "#WellnessMembership", "#ColoradoSprings", "#ConsistentCare", "#PriorityBooking", "#MemberBenefits", "#TherapeuticPrograms", "#WellnessJourney"],
    visualSuggestion: "Professional membership materials, elegant spa amenities, or member relaxation area"
  },
  {
    type: "Location/Convenience Focus", 
    platform: "instagram",
    caption: "📍 Conveniently located on North Nevada Avenue in Colorado Springs\n\nYour wellness oasis awaits in our beautifully appointed massage therapy studio. Easy parking, serene atmosphere, and expert therapeutic care all in one location.\n\n✨ What sets Awakenings apart:\n• Professional licensed therapists\n• Tranquil, spa-like environment\n• Personalized treatment approach\n• Convenient Colorado Springs location\n\nReady to awaken your body's natural healing potential?\n\n🌐 awakeningsmassagecos.com",
    hashtags: ["#ColoradoSpringsMassage", "#NevadaAvenue", "#AwakeningsMassage", "#ConvenientLocation", "#ProfessionalMassage", "#WellnessOasis", "#ColoradoWellness"],
    visualSuggestion: "Exterior shot of location or interior welcoming space from website"
  },
  {
    type: "Colorado Springs Community",
    platform: "facebook",
    caption: "Proud to serve the Colorado Springs community! 🏔️\n\nAt Awakenings Massage Company, we believe every resident of our beautiful city deserves access to professional massage therapy. Whether you're an active outdoor enthusiast who loves our Colorado trails, or someone seeking relief from daily stress, we're here for you.\n\nOur North Nevada Avenue location makes it easy for Colorado Springs residents to prioritize their wellness. From Broadmoor to Old Colorado City, we welcome clients from across our amazing community.\n\nJoin the growing number of Colorado Springs residents who have made Awakenings Massage part of their wellness routine.\n\nSchedule online at awakeningsmassagecos.com or call today!\n\n#ProudToServeColoradoSprings",
    hashtags: ["#ColoradoSprings", "#CommunityWellness", "#AwakeningsMassage", "#ColoradoLiving", "#NevadaAvenue", "#LocalBusiness", "#MassageTherapy", "#ColoradoCommunity"],
    visualSuggestion: "Colorado Springs landscape/mountains with spa elements, or community-focused imagery"
  },
  {
    type: "Weekend Wellness with Add-ons",
    platform: "both",
    caption: "🌅 Weekend Wellness Experience at Awakenings Massage Company\n\nElevate your weekend with our signature therapeutic treatments enhanced with luxurious add-ons.\n\n💆‍♀️ This Weekend's Featured Experience:\n• Therapeutic massage session\n• Hot stone enhancement for deeper muscle relaxation\n• Aromatherapy upgrade for stress relief\n• Heated towel treatment\n• Post-massage herbal tea service\n\nTransform your weekend into a complete wellness retreat right here in Colorado Springs.\n\n📍 2402 North Nevada Avenue\n📅 Weekend appointments available\n🌐 awakeningsmassagecos.com\n\n*Add-on services can be customized to your preferences. Book in advance for best availability.*",
    hashtags: ["#WeekendWellness", "#AwakeningsMassage", "#ColoradoSprings", "#HotStone", "#Aromatherapy", "#LuxuryAddons", "#TherapeuticMassage", "#WellnessExperience"],
    visualSuggestion: "Weekend spa setup with hot stones, aromatherapy oils, heated towels, and herbal tea"
  },
  {
    type: "Seasonal Colorado Focus",
    platform: "instagram", 
    caption: "Colorado winters can be tough on your muscles! ❄️\n\nFrom skiing and snowboarding adventures to dealing with cold weather tension, your body deserves the therapeutic care that Awakenings Massage Company provides.\n\n🏔️ Winter Wellness at its finest:\n✨ Warm, inviting treatment rooms\n✨ Expert therapeutic techniques\n✨ Located right here in Colorado Springs\n✨ Professional care you can trust\n\nDon't let winter aches slow you down. Visit us at 2402 North Nevada Avenue and discover what true relaxation feels like.\n\n❄️ Ask about our muscle recovery treatment packages!\n\n#ColoradoWinter #AwakeningsMassage",
    hashtags: ["#ColoradoWinter", "#WinterWellness", "#SkiRecovery", "#AwakeningsMassage", "#ColoradoSprings", "#MuscleRecovery", "#TherapeuticMassage", "#TreatmentPackages"],
    visualSuggestion: "Cozy winter spa interior, warm lighting, or Colorado winter landscape with wellness theme"
  },
  {
    type: "Stress Relief Focus",
    platform: "facebook",
    caption: "Life in Colorado Springs is beautiful, but it can also be stressful. 🌸\n\nFrom work demands to family responsibilities, we all carry tension in our bodies. At Awakenings Massage Company, we understand that massage therapy isn't just luxury - it's essential healthcare.\n\nOur professional approach to stress relief includes:\n• Customized massage techniques for your specific needs\n• Peaceful, elegant environment for complete relaxation\n• Licensed therapists with expertise in stress management\n• Convenient location on North Nevada Avenue\n\n💡 Did you know? Regular massage therapy can:\n→ Lower cortisol (stress hormone) levels\n→ Improve sleep quality\n→ Boost immune system function\n→ Reduce anxiety and depression symptoms\n\nInvest in your mental and physical wellness today.\n\n📞 Call to schedule your stress-relief session\n🌐 awakeningsmassagecos.com",
    hashtags: ["#StressRelief", "#MentalWellness", "#AwakeningsMassage", "#ColoradoSprings", "#HealthBenefits", "#WellnessEducation", "#ProfessionalCare", "#MindBodyHealth"],
    visualSuggestion: "Serene, peaceful spa environment showing relaxation and stress relief"
  }
];

console.log(`\n📝 Generated ${promotionalPosts.length} updated promotional posts:\n`);

promotionalPosts.forEach((post, index) => {
  console.log(`🎯 POST ${index + 1}: ${post.type.toUpperCase()}`);
  console.log(`Platform: ${post.platform.toUpperCase()}`);
  console.log(`\nCaption:\n${post.caption}\n`);
  console.log(`Hashtags: ${post.hashtags.join(' ')}\n`);
  console.log(`📸 Visual Suggestion: ${post.visualSuggestion}\n`);
  console.log("=" .repeat(65));
});

console.log("\n✅ PROMOTIONAL CAMPAIGN UPDATED!");
console.log("🚫 All discount language removed");
console.log("🎯 Focus on memberships and add-on value");
console.log("💡 Weekend special now highlights add-on services");
console.log("📸 Match each post with professional photos from your website.");