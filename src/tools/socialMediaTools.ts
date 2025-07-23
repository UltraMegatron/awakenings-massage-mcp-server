import { McpError, ErrorCode, Tool } from '@modelcontextprotocol/sdk/types.js';
import { ContentGenerator } from '../services/contentGenerator.js';
import { CanvaService } from '../services/canvaService.js';
import { BusinessInfo, SocialMediaPost, Campaign } from '../types/index.js';

export function createSocialMediaTools(
  contentGenerator: ContentGenerator,
  canvaService: CanvaService,
  businessInfo: BusinessInfo
): Tool[] {
  return [
    {
      name: "generate_social_media_post",
      description: "Generate a social media post for Instagram, Facebook, or both platforms",
      inputSchema: {
        type: "object",
        properties: {
          theme: {
            type: "string",
            enum: ["relaxation", "wellness", "pain_relief", "sports_recovery"],
            description: "The theme/focus of the post"
          },
          platform: {
            type: "string",
            enum: ["instagram", "facebook", "both"],
            description: "Target platform(s) for the post"
          },
          customMessage: {
            type: "string",
            description: "Optional custom message to include in the post"
          }
        },
        required: ["theme", "platform"]
      }
    },
    {
      name: "generate_promotional_post",
      description: "Create a promotional post with a special offer or discount",
      inputSchema: {
        type: "object",
        properties: {
          offer: {
            type: "string",
            description: "The promotional offer details (e.g., '20% off first session')"
          },
          platform: {
            type: "string",
            enum: ["instagram", "facebook", "both"],
            description: "Target platform(s) for the promotional post"
          }
        },
        required: ["offer", "platform"]
      }
    },
    {
      name: "generate_educational_post",
      description: "Create an educational post about massage therapy benefits, techniques, or wellness tips",
      inputSchema: {
        type: "object",
        properties: {
          topic: {
            type: "string",
            enum: ["benefits", "techniques", "selfcare"],
            description: "The educational topic to focus on"
          },
          platform: {
            type: "string",
            enum: ["instagram", "facebook", "both"],
            description: "Target platform(s) for the educational post"
          }
        },
        required: ["topic", "platform"]
      }
    },
    {
      name: "create_weekly_content_schedule",
      description: "Generate a full week's worth of social media posts",
      inputSchema: {
        type: "object",
        properties: {
          startDate: {
            type: "string",
            description: "Optional start date (YYYY-MM-DD format). Defaults to current date."
          }
        }
      }
    },
    {
      name: "create_monthly_content_schedule",
      description: "Generate a full month's worth of social media posts with strategic weekly themes",
      inputSchema: {
        type: "object",
        properties: {
          month: {
            type: "number",
            description: "Month number (1-12). Defaults to current month."
          },
          year: {
            type: "number", 
            description: "Year (e.g., 2025). Defaults to current year."
          }
        }
      }
    },
    {
      name: "create_social_media_campaign",
      description: "Generate a comprehensive social media campaign with multiple posts over a specified period",
      inputSchema: {
        type: "object",
        properties: {
          campaignName: {
            type: "string",
            description: "Name of the social media campaign"
          },
          duration: {
            type: "number",
            description: "Campaign duration in days"
          },
          frequency: {
            type: "string",
            enum: ["daily", "weekly"],
            description: "How often to post content"
          }
        },
        required: ["campaignName", "duration", "frequency"]
      }
    },
    {
      name: "create_canva_design",
      description: "Create a new design in Canva for social media posts",
      inputSchema: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Title for the Canva design"
          },
          platform: {
            type: "string",
            enum: ["instagram_post", "facebook_post", "instagram_story", "facebook_cover"],
            description: "Type of social media design to create"
          },
          textContent: {
            type: "string",
            description: "Text content to include in the design"
          }
        },
        required: ["title", "platform"]
      }
    },
    {
      name: "get_canva_auth_url",
      description: "Generate Canva OAuth authorization URL for connecting your Canva account",
      inputSchema: {
        type: "object",
        properties: {
          scopes: {
            type: "array",
            items: { type: "string" },
            description: "OAuth scopes to request (defaults to design read/write permissions)"
          }
        }
      }
    },
    {
      name: "export_canva_design",
      description: "Export a Canva design as an image file",
      inputSchema: {
        type: "object",
        properties: {
          designId: {
            type: "string",
            description: "The Canva design ID to export"
          },
          format: {
            type: "string",
            enum: ["PNG", "JPG", "PDF"],
            description: "Export format (defaults to PNG)"
          }
        },
        required: ["designId"]
      }
    },
    {
      name: "get_business_info",
      description: "Retrieve the current business information used for post generation",
      inputSchema: {
        type: "object",
        properties: {}
      }
    },
    {
      name: "generate_hashtag_sets",
      description: "Generate relevant hashtag sets for different types of massage therapy posts",
      inputSchema: {
        type: "object",
        properties: {
          theme: {
            type: "string",
            enum: ["relaxation", "wellness", "pain_relief", "sports_recovery", "promotional", "educational"],
            description: "Theme to generate hashtags for"
          },
          count: {
            type: "number",
            description: "Number of hashtags to generate (default: 8-12)"
          }
        },
        required: ["theme"]
      }
    }
  ];
}

export async function handleSocialMediaTool(
  name: string,
  args: any,
  contentGenerator: ContentGenerator,
  canvaService: CanvaService,
  businessInfo: BusinessInfo
): Promise<any> {
  try {
    switch (name) {
      case "generate_social_media_post": {
        const post = contentGenerator.generateMassageTherapyPost(args.theme, args.platform);
        if (args.customMessage) {
          post.caption = `${args.customMessage}\n\n${post.caption}`;
        }
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(post, null, 2)
            }
          ]
        };
      }

      case "generate_promotional_post": {
        const post = contentGenerator.generatePromotionalPost(args.offer, args.platform);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(post, null, 2)
            }
          ]
        };
      }

      case "generate_educational_post": {
        const post = contentGenerator.generateEducationalPost(args.topic, args.platform);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(post, null, 2)
            }
          ]
        };
      }

      case "create_weekly_content_schedule": {
        const posts = contentGenerator.generateWeeklySchedule();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                schedule: posts,
                totalPosts: posts.length,
                startDate: args.startDate || new Date().toISOString().split('T')[0]
              }, null, 2)
            }
          ]
        };
      }

      case "create_monthly_content_schedule": {
        const month = args.month ? args.month - 1 : undefined; // Convert to 0-based month
        const posts = contentGenerator.generateMonthlySchedule(month, args.year);
        const targetDate = new Date(args.year || new Date().getFullYear(), month || new Date().getMonth(), 1);
        const monthName = targetDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                month: monthName,
                schedule: posts,
                totalPosts: posts.length,
                weeklyBreakdown: {
                  week1: "Relaxation & Stress Relief",
                  week2: "Pain Relief & Therapeutic Benefits", 
                  week3: "Sports Recovery & Active Lifestyle",
                  week4: "Wellness & Self-Care"
                }
              }, null, 2)
            }
          ]
        };
      }

      case "create_social_media_campaign": {
        const campaign = contentGenerator.generateCampaign(
          args.campaignName,
          args.duration,
          args.frequency
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(campaign, null, 2)
            }
          ]
        };
      }

      case "create_canva_design": {
        const platformDimensions = {
          instagram_post: { width: 1080, height: 1080 },
          facebook_post: { width: 1200, height: 630 },
          instagram_story: { width: 1080, height: 1920 },
          facebook_cover: { width: 1640, height: 859 }
        };

        const dimensions = platformDimensions[args.platform as keyof typeof platformDimensions];
        const designRequest = {
          title: args.title,
          width: dimensions.width,
          height: dimensions.height
        };

        const design = await canvaService.createDesign(designRequest);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(design, null, 2)
            }
          ]
        };
      }

      case "get_canva_auth_url": {
        const scopes = args.scopes || ['design:content:read', 'design:content:write'];
        const authUrl = canvaService.generateAuthUrl(scopes);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({ authUrl, scopes }, null, 2)
            }
          ]
        };
      }

      case "export_canva_design": {
        const format = args.format || 'PNG';
        const exportJob = await canvaService.exportDesign(args.designId, format);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(exportJob, null, 2)
            }
          ]
        };
      }

      case "get_business_info": {
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(businessInfo, null, 2)
            }
          ]
        };
      }

      case "generate_hashtag_sets": {
        const hashtagSets = {
          relaxation: ["#MassageTherapy", "#Relaxation", "#StressRelief", "#SelfCare", "#Wellness", "#Mindfulness", "#TherapeuticMassage", "#InnerPeace", "#Tranquility", "#RestAndRestore"],
          wellness: ["#Wellness", "#HealthyLiving", "#MassageTherapy", "#SelfCare", "#BodyMindBalance", "#HealthyLifestyle", "#WellnessJourney", "#HolisticHealth", "#Mindfulness", "#WellBeing"],
          pain_relief: ["#PainRelief", "#TherapeuticMassage", "#ChronicPain", "#MuscleRecovery", "#Mobility", "#Healing", "#PainManagement", "#BodyWork", "#MuscularTherapy", "#Recovery"],
          sports_recovery: ["#SportsMassage", "#AthleteRecovery", "#PerformanceTherapy", "#InjuryPrevention", "#SportsTherapy", "#RecoveryMassage", "#AthleticPerformance", "#MuscleRecovery", "#SportsWellness", "#AthleteLife"],
          promotional: ["#SpecialOffer", "#MassageTherapy", "#LimitedTime", "#TreatYourself", "#Wellness", "#Relaxation", "#BookNow", "#SelfCare", "#Deal", "#Discount"],
          educational: ["#MassageBenefits", "#HealthFacts", "#Wellness", "#StressReduction", "#HealthyLiving", "#SelfCare", "#MindBodyConnection", "#HealthTips", "#WellnessEducation", "#HealthAwareness"]
        };

        const selectedHashtags = hashtagSets[args.theme as keyof typeof hashtagSets] || hashtagSets.wellness;
        const count = Math.min(args.count || 10, selectedHashtags.length);
        
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                theme: args.theme,
                hashtags: selectedHashtags.slice(0, count),
                total: count
              }, null, 2)
            }
          ]
        };
      }

      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
    }
  } catch (error: any) {
    throw new McpError(
      ErrorCode.InternalError,
      `Tool execution failed: ${error.message}`
    );
  }
}