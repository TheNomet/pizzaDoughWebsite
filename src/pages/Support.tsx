import { useEffect } from "react";
import { Mail, HelpCircle, Bug, Lightbulb, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Support = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Hero Header Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Pizza&Dough <span className="bg-gradient-hero bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Get help with your dough calculations and app features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Section header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Card className="p-8 bg-card border">
              <div className="space-y-8">
                {/* Getting Started Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Getting Started</h3>
              <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-pizza-dough">
                    <AccordionTrigger>What is Pizza&Dough?</AccordionTrigger>
                    <AccordionContent>
                      Pizza&Dough is a professional dough calculator app that helps you create perfect pizza, bread, and sweet doughs with scientific precision. It uses advanced algorithms and empirical data to calculate optimal yeast amounts, fermentation times, and ingredient ratios for consistent, professional results.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="who-is-for">
                    <AccordionTrigger>Who is Pizza&Dough for?</AccordionTrigger>
                    <AccordionContent>
                      Pizza&Dough is perfect for everyone from beginners learning their first pizza dough to professional bakers perfecting complex sourdough recipes. Whether you're making Neapolitan pizza, sourdough bread, or brioche, Pizza&Dough provides the tools and precision you need.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-to-get-started">
                    <AccordionTrigger>How do I get started?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Download Pizza&Dough from the App Store</li>
                        <li>Complete the onboarding process</li>
                        <li>Start with a sample recipe or create your own</li>
                        <li>Use the dough calculator to adjust ingredients and timing</li>
                        <li>Follow the step-by-step timeline with live timers</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="free-trial">
                    <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Pizza&Dough offers a free trial period so you can explore all premium features. After the trial, you can subscribe to continue using premium features like unlimited recipe saving. But the built in recipes and basic functionalities will still be available.
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Dough Calculator Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Dough Calculator</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="dough-types-supported">
                    <AccordionTrigger>What types of dough are supported?</AccordionTrigger>
                    <AccordionContent>
                      Pizza&Dough supports four main categories:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Pizza:</strong> Neapolitan, Roman, Contemporary styles</li>
                        <li><strong>Baking Tray:</strong> Focaccia, Pizza in Teglia, and other tray-baked goods</li>
                        <li><strong>Bread:</strong> Sourdough, Ciabatta, Baguette, and more</li>
                        <li><strong>Sweet Dough:</strong> Brioche, Panettone, and enriched doughs</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-calculator-works">
                    <AccordionTrigger>How does the dough calculator work?</AccordionTrigger>
                    <AccordionContent>
                      The calculator uses your inputs (flour type, hydration, salt, yeast, temperature, and timing) to calculate precise ingredient amounts. It supports multiple input modes:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Batch size:</strong> Enter total dough weight or number of items</li>
                        <li><strong>Tray baking:</strong> Enter tray dimensions and thickness</li>
                        <li><strong>Weight per item:</strong> Specify individual item weight</li>
                      </ul>
                      The app automatically calculates all ingredient amounts based on baker's percentages and your specifications.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="customize-ingredients">
                    <AccordionTrigger>Can I customize ingredient amounts?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Pizza&Dough allows you to:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Adjust hydration, salt, and yeast percentages</li>
                        <li>Add oil, fat, sugar, milk, and eggs</li>
                        <li>Create custom ingredients with precise measurements</li>
                        <li>Organize ingredients into subsections</li>
                        <li>Fine-tune every aspect of your recipe</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dough-styles-difference">
                    <AccordionTrigger>What is the difference between different dough styles?</AccordionTrigger>
                    <AccordionContent>
                      Each dough style has optimized defaults for:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Hydration levels</li>
                        <li>Fermentation times</li>
                        <li>Yeast amounts</li>
                        <li>Proofing schedules</li>
                        <li>Kneading methods</li>
                      </ul>
                      These defaults are based on traditional techniques and can be customized to your preferences.
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Yeast Calculations Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Yeast Calculations</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-dref">
                    <AccordionTrigger>What is Dref (Dough Rise Factor)?</AccordionTrigger>
                    <AccordionContent>
                      Dref is a parameter that controls how much your dough should rise during fermentation. A higher Dref value means more rise (more yeast), while a lower value means less rise (less yeast). The default is 1.4, but you can adjust it to fine-tune your dough's behavior.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="different-yeast-types">
                    <AccordionTrigger>Can I use different types of yeast?</AccordionTrigger>
                    <AccordionContent>
                      Yes! Pizza&Dough supports three yeast types:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Dry yeast:</strong> Most common, long shelf life</li>
                        <li><strong>Fresh yeast:</strong> Also called compressed or cake yeast</li>
                        <li><strong>Instant yeast:</strong> Fast-acting, no proofing needed</li>
                      </ul>
                      The app automatically converts between types, so you can use whichever you have available.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="temperature-yeast">
                    <AccordionTrigger>How does temperature affect yeast calculations?</AccordionTrigger>
                    <AccordionContent>
                      Temperature is crucial for yeast activity. Pizza&Dough calculates yeast amounts based on:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Room temperature (RT):</strong> For bulk fermentation and proofing</li>
                        <li><strong>Cold temperature (CT):</strong> For cold fermentation in the refrigerator</li>
                      </ul>
                      The application will sum all the RT and CT steps and calculate the yeast accordingly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="yeast-amount-timing">
                    <AccordionTrigger>Why does my yeast amount change when I adjust timing?</AccordionTrigger>
                    <AccordionContent>
                      Yeast amount is inversely related to fermentation time: more time = less yeast needed, less time = more yeast needed. When you adjust your fermentation schedule, Pizza&Dough automatically recalculates the optimal yeast amount to maintain consistent results.
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Pre-ferments Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Pre-ferments</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-are-pre-ferments">
                    <AccordionTrigger>What are pre-ferments?</AccordionTrigger>
                    <AccordionContent>
                      Pre-ferments are portions of dough that are fermented separately before being mixed into the main dough. They develop flavor and improve dough structure. Pizza&Dough supports:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Poolish:</strong> Liquid pre-ferment (100% hydration)</li>
                        <li><strong>Biga:</strong> Stiff pre-ferment (50-60% hydration)</li>
                        <li><strong>Levain:</strong> Sourdough starter-based pre-ferment</li>
                        <li><strong>Sponge:</strong> Similar to poolish, used in enriched doughs</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-use-pre-ferments">
                    <AccordionTrigger>How do I use pre-ferments in Pizza&Dough?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Enable the pre-ferment option in the dough calculator</li>
                        <li>Select your pre-ferment type (poolish, biga, levain, or sponge)</li>
                        <li>Set the pre-ferment percentage (how much of your total flour goes into the pre-ferment)</li>
                        <li>The app automatically calculates:
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>Pre-ferment flour and water amounts</li>
                            <li>Pre-ferment yeast amount</li>
                            <li>Main dough ingredient adjustments</li>
                            <li>Fermentation schedule for both pre-ferment and main dough</li>
                          </ul>
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="customize-pre-ferment-hydration">
                    <AccordionTrigger>Can I customize pre-ferment hydration?</AccordionTrigger>
                    <AccordionContent>
                      Yes! For poolish and biga, you can customize the hydration level. The app will adjust calculations accordingly. For levain, you can specify the active starter percentage.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="main-dough-yeast-pre-ferment">
                    <AccordionTrigger>Does the app calculate the main dough yeast taking into account also pre-ferments?</AccordionTrigger>
                    <AccordionContent>
                      Yes! When you use a pre-ferment, Pizza&Dough automatically adjusts the main dough yeast amount. Since the pre-ferment already contains yeast that will contribute to fermentation, the app reduces the yeast in the main dough accordingly. This ensures your dough ferments perfectly without overproofing, giving you balanced results every time.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="autolyse-pre-ferment">
                    <AccordionTrigger>Can I set up autolyse when using a pre-ferment?</AccordionTrigger>
                  <AccordionContent>
                      Yes! You can combine pre-ferments with autolyse:
                      <ol className="list-decimal list-inside space-y-2 mt-2">
                        <li>Set up your pre-ferment as usual</li>
                        <li>In the main dough section, add an autolyse step</li>
                        <li>The autolyse automatically uses:
                          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                            <li>100% of the main dough flour (flour not in the pre-ferment)</li>
                            <li>50% of the main dough water</li>
                          </ul>
                        </li>
                        <li>The remaining water is added later when mixing in the pre-ferment</li>
                      </ol>
                      This workflow combines the flavor benefits of pre-ferments with the gluten development benefits of autolyse.
                  </AccordionContent>
                </AccordionItem>
                  </Accordion>
                </div>

                {/* Recipes Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Recipes</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="save-custom-recipes">
                  <AccordionTrigger>Can I save custom recipes?</AccordionTrigger>
                  <AccordionContent>
                      Yes! Premium users can save unlimited custom recipes. Each recipe includes:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>All ingredient amounts and percentages</li>
                        <li>Fermentation schedule with timers</li>
                        <li>Step-by-step instructions</li>
                        <li>Custom notes and tags</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="create-recipe-from-calculation">
                    <AccordionTrigger>How do I create a recipe from a calculation?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Set up your dough calculator with desired ingredients and timing</li>
                        <li>Tap the save button</li>
                        <li>Give your recipe a name</li>
                        <li>The recipe is saved with all current calculator values</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="edit-saved-recipes">
                    <AccordionTrigger>Can I edit saved recipes?</AccordionTrigger>
                    <AccordionContent>
                      Yes! You can:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Edit recipe details</li>
                        <li>Modify ingredient amounts</li>
                        <li>Adjust fermentation schedules</li>
                        <li>Update proofing steps</li>
                        <li>Change any aspect of the recipe</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="where-recipes-stored">
                    <AccordionTrigger>Where are my recipes stored?</AccordionTrigger>
                    <AccordionContent>
                      Your recipes are stored locally on your device. This means:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Your recipes are saved directly on your iPhone or iPad</li>
                        <li>No internet connection needed to access your recipes</li>
                        <li>Your data stays private and secure on your device</li>
                        <li>Recipes are automatically saved when you create or edit them</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="share-recipes">
                    <AccordionTrigger>Can I share recipes?</AccordionTrigger>
                    <AccordionContent>
                      Recipe sharing is not currently available. Your recipes are stored locally on your device for privacy and security.
                  </AccordionContent>
                </AccordionItem>
                  </Accordion>
                </div>

                {/* Timers & Fermentation Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Timers & Fermentation</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="live-timers-work">
                  <AccordionTrigger>How do the live timers work?</AccordionTrigger>
                  <AccordionContent>
                      Pizza&Dough uses <strong>Live Activities</strong> to show fermentation timers:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Dynamic Island:</strong> Timers appear in the Dynamic Island on iPhone 14 Pro and later</li>
                        <li><strong>Lock Screen:</strong> Timers show on your lock screen</li>
                        <li><strong>Notifications:</strong> Get alerts when it's time for the next step</li>
                        <li><strong>Background tracking:</strong> Timers continue even when the app is closed</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="fermentation-timeline">
                    <AccordionTrigger>What is the fermentation timeline?</AccordionTrigger>
                    <AccordionContent>
                      The timeline shows all steps in your recipe:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Pre-ferment steps (if using)</li>
                        <li>Mixing and kneading</li>
                        <li>Bulk fermentation</li>
                        <li>Dividing and shaping</li>
                        <li>Proofing steps</li>
                        <li>Baking</li>
                      </ul>
                      Each step shows the duration, temperature, and what to do next.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="customize-proofing-times">
                    <AccordionTrigger>Can I customize proofing times?</AccordionTrigger>
                    <AccordionContent>
                      Yes! You can:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Add multiple proofing steps</li>
                        <li>Set room temperature and cold fermentation times</li>
                        <li>Adjust timing for each step</li>
                        <li>Edit or remove steps as needed</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="temperature-fermentation-timing">
                    <AccordionTrigger>How does temperature affect fermentation timing?</AccordionTrigger>
                    <AccordionContent>
                      Temperature directly affects fermentation speed:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Warmer temperatures:</strong> Faster fermentation (less time needed)</li>
                        <li><strong>Cooler temperatures:</strong> Slower fermentation (more time needed)</li>
                      </ul>
                      Pizza&Dough automatically adjusts yeast calculations based on your temperature settings, but you can also manually adjust proofing times to match your schedule.
                  </AccordionContent>
                </AccordionItem>
                  </Accordion>
                </div>

                {/* Baker's Percentage Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Baker's Percentage</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-bakers-percentage">
                    <AccordionTrigger>What is Baker's Percentage?</AccordionTrigger>
                    <AccordionContent>
                      Baker's Percentage is a professional method of expressing recipe ingredients as percentages relative to the total flour weight. Flour is always 100%, and all other ingredients are expressed as percentages of that flour weight.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="bakers-percentage-calculator">
                    <AccordionTrigger>How does the Baker's Percentage calculator work?</AccordionTrigger>
                    <AccordionContent>
                      The calculator allows you to:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Enter ingredient amounts and see percentages</li>
                        <li>Enter percentages and see ingredient amounts</li>
                        <li>Visualize the breakdown of your recipe</li>
                        <li>Understand the relationship between ingredients</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="why-bakers-percentage-useful">
                    <AccordionTrigger>Why is Baker's Percentage useful?</AccordionTrigger>
                  <AccordionContent>
                      Baker's Percentage makes it easy to:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Scale recipes up or down</li>
                        <li>Compare different recipes</li>
                        <li>Understand recipe structure</li>
                        <li>Maintain consistency across batches</li>
                        <li>Adjust recipes while keeping ratios correct</li>
                      </ul>
                  </AccordionContent>
                </AccordionItem>
                  <AccordionItem value="bakers-percentage-custom-ingredients">
                    <AccordionTrigger>Can I use Baker's Percentage with custom ingredients?</AccordionTrigger>
                  <AccordionContent>
                      Yes! The calculator includes all standard ingredients (flour, water, salt, yeast, oil, fat, sugar, milk, eggs) and supports custom ingredients you've added to your recipes.
                  </AccordionContent>
                </AccordionItem>
                  </Accordion>
                </div>

                {/* Units & Measurements Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Units & Measurements</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="different-units">
                  <AccordionTrigger>Can I use different units (metric/imperial)?</AccordionTrigger>
                  <AccordionContent>
                      Yes! Pizza&Dough supports both metric and imperial units. You can switch between them in the settings:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Metric:</strong> Grams, kilograms, liters, Celsius</li>
                        <li><strong>Imperial:</strong> Ounces, pounds, fluid ounces, Fahrenheit</li>
                      </ul>
                      All calculations automatically convert when you switch units.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="conversion-accuracy">
                    <AccordionTrigger>How accurate are the conversions?</AccordionTrigger>
                    <AccordionContent>
                      Pizza&Dough uses precise conversion factors:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>1 kg = 2.20462 lbs</li>
                        <li>1 g = 0.035274 oz</li>
                        <li>Temperature conversions use standard formulas</li>
                        <li>Volume conversions account for ingredient density</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Advanced Features Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Advanced Features</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="custom-ingredients">
                    <AccordionTrigger>What are custom ingredients?</AccordionTrigger>
                    <AccordionContent>
                      Custom ingredients allow you to add any ingredient to your recipe with precise measurements. Examples:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Seeds (sesame, poppy, etc.)</li>
                        <li>Herbs and spices</li>
                        <li>Specialty flours</li>
                        <li>Additives (malt, vitamin C, etc.)</li>
                      </ul>
                      Each custom ingredient can be specified as a percentage of flour or as an absolute amount.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ingredient-subsections">
                    <AccordionTrigger>What are ingredient subsections?</AccordionTrigger>
                    <AccordionContent>
                      Subsections help you organize complex recipes by grouping ingredients into logical sections. For example:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Main dough:</strong> Flour, water, salt, yeast</li>
                        <li><strong>Enrichments:</strong> Oil, fat, sugar, milk, eggs</li>
                        <li><strong>Add-ins:</strong> Custom ingredients, seeds, etc.</li>
                      </ul>
                      To enable subsections, tap the three dots (⋯) menu next to the main dough section in the calculator. From there, you can add subsections to organize your ingredients. This makes it easier to understand and follow complex recipes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="kneading-method">
                    <AccordionTrigger>What is the kneading method setting?</AccordionTrigger>
                    <AccordionContent>
                      The kneading method setting mainly changes the water temperature for mixing. Different kneading methods generate different amounts of friction heat:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Mixer:</strong> Stand mixers generate more friction heat, so cooler water is used</li>
                        <li><strong>Hand kneading:</strong> Manual kneading generates less heat, so warmer water may be needed</li>
                      </ul>
                      The app automatically adjusts the water temperature based on your selected kneading method to help you achieve the desired final dough temperature.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="temperature-selector">
                    <AccordionTrigger>How do I use the temperature selector?</AccordionTrigger>
                    <AccordionContent>
                      The temperature selector helps you:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Set room temperature for bulk fermentation</li>
                        <li>Set cold temperature for refrigerator fermentation</li>
                        <li>See how temperature affects timing</li>
                        <li>Optimize your fermentation schedule</li>
                      </ul>
                      The app uses these temperatures in yeast calculations and timing recommendations.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dref-adjustment">
                    <AccordionTrigger>What is the Dref adjustment?</AccordionTrigger>
                    <AccordionContent>
                      Dref (Dough Rise Factor) controls how much your dough rises:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Higher Dref (1.5-2.5):</strong> More rise, more active fermentation</li>
                        <li><strong>Lower Dref (1.2-1.3):</strong> Less rise, slower fermentation</li>
                        <li><strong>Default (1.4):</strong> Balanced rise for most recipes</li>
                      </ul>
                      Adjust Dref to fine-tune your dough's behavior based on your preferences and conditions.
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Premium Features Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Premium Features</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="premium-features">
                    <AccordionTrigger>What features are included in the premium subscription?</AccordionTrigger>
                    <AccordionContent>
                      Premium features include:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Unlimited recipe saving:</strong> Save as many custom recipes as you want</li>
                        <li><strong>Advanced mode:</strong> Access to advanced calculator features and settings</li>
                        <li><strong>Proofing view:</strong> Detailed proofing timeline and step management</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="premium-cost">
                    <AccordionTrigger>How much does premium cost?</AccordionTrigger>
                    <AccordionContent>
                      Check the App Store for current pricing. Pizza&Dough offers:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Free trial period to explore all features</li>
                        <li>Monthly and annual subscription options</li>
                        <li>Lifetime access option</li>
                        <li>Family sharing support (where available)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="use-without-premium">
                    <AccordionTrigger>Can I use the app without premium?</AccordionTrigger>
                    <AccordionContent>
                      Yes! The free version includes:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Basic dough calculator functionality</li>
                        <li>All yeast and fermentation calculations (no customisation)</li>
                        <li>Live timers and notifications</li>
                        <li>Sample recipes</li>
                      </ul>
                      Premium adds unlimited recipe saving, advanced mode, and the proofing view.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="manage-subscription">
                    <AccordionTrigger>How do I manage my subscription?</AccordionTrigger>
                    <AccordionContent>
                      You can manage your subscription through:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>The Settings tab in Pizza&Dough</li>
                        <li>App Store Settings on your device</li>
                        <li>Contact support for assistance</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cancel-subscription">
                    <AccordionTrigger>What happens if I cancel my subscription?</AccordionTrigger>
                    <AccordionContent>
                      If you cancel:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>You keep access until the end of your billing period</li>
                        <li>Your saved recipes remain on your device</li>
                        <li>You can resubscribe anytime to restore full access</li>
                        <li>All your data is preserved locally</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  </Accordion>
                </div>

                {/* Troubleshooting Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Troubleshooting</h3>
                  <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="yeast-calculation-wrong">
                    <AccordionTrigger>My yeast calculation seems wrong. What should I do?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Check your temperature settings (RT and CT)</li>
                        <li>Verify your fermentation times are correct</li>
                        <li>Ensure Dref is set appropriately (default 1.4)</li>
                        <li>Make sure all proofing steps are included</li>
                        <li>Contact support with your recipe details for assistance</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="app-crashes">
                    <AccordionTrigger>The app crashes or freezes</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Update to the latest version</li>
                        <li>Restart your device</li>
                        <li>Force-close and reopen the app</li>
                        <li>Check available storage space</li>
                        <li>Contact support with details about when it happens</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="calculations-dont-match">
                    <AccordionTrigger>Calculations don't match my expectations</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Verify all inputs are correct (flour type, hydration, etc.)</li>
                        <li>Check that you're using the correct units</li>
                        <li>Review the Baker's Percentage breakdown</li>
                        <li>Ensure temperature settings match your environment</li>
                        <li>Contact support with specific details</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cant-find-feature">
                    <AccordionTrigger>I can't find a feature</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Check the Settings tab for additional options</li>
                        <li>Look for info buttons (ℹ️) that explain features</li>
                        <li>Review the onboarding if you're new</li>
                        <li>Contact support for guidance</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="report-bug">
                    <AccordionTrigger>How do I report a bug?</AccordionTrigger>
                    <AccordionContent>
                      Email us at <strong>pizzadough.app@gmail.com</strong> with:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Description of the issue</li>
                        <li>Steps to reproduce the problem</li>
                        <li>Your device model and iOS version</li>
                        <li>Screenshots or screen recordings if applicable</li>
                        <li>Any error messages you see</li>
                      </ul>
                      We typically respond within 24 hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="request-feature">
                    <AccordionTrigger>How do I request a feature?</AccordionTrigger>
                    <AccordionContent>
                      We'd love to hear your ideas! Email us at <strong>pizzadough.app@gmail.com</strong> with:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Description of the feature</li>
                        <li>How you would use it</li>
                        <li>Why it would be helpful</li>
                      </ul>
                      We consider all suggestions for future updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Bug & Feature Requests Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-3 gap-8 justify-items-center">
              {/* Report Bug Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Bug className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Report a Bug
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Found a bug? We'd love to fix it! Please email us with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm text-center">
                      <li>Description of the issue</li>
                      <li>Steps to reproduce the problem</li>
                      <li>Your device model and iOS version</li>
                      <li>Screenshots if applicable</li>
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Bug Report">
                      Report a Bug
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Feature Requests Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Feature Requests
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Have an idea for a new feature? We'd love to hear it! Email us with your suggestions.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Feature Request">
                      Suggest a Feature
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Contact Us Card */}
              <Card className="p-8 bg-card border hover:shadow-feature transition-all group flex flex-col h-full w-full max-w-sm">
                <div className="flex flex-col h-full space-y-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform mx-auto">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-center">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Need help? Have questions? We're here for you!
                    </p>
                    <div className="text-center space-y-2">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                        <strong>Email:</strong>
                        <a 
                          href="mailto:pizzadough.app@gmail.com"
                          className="text-primary hover:underline font-semibold"
                        >
                          pizzadough.app@gmail.com
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <strong>Response Time:</strong> We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-secondary transition-colors mt-auto"
                    asChild
                  >
                    <a href="mailto:pizzadough.app@gmail.com?subject=Support Request">
                      Send us an Email
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;

