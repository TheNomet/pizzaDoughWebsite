import { useEffect } from "react";
import { Shield, ArrowLeft, Lock, Eye, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
                Privacy <span className="bg-gradient-hero bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Pizza&Dough - Your privacy is our priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Data Collection Card */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-bold">
                    <span className="bg-gradient-hero bg-clip-text text-transparent">Data Collection</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    This app does not collect, store, or transmit any personal data. All your information stays on your device.
                  </p>
                </div>
              </div>
            </Card>

            {/* What information does the Application obtain */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    What information does the Application obtain and how is it used?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Application does not obtain any information when you download and use it. Registration is not required to use the Application. All your recipes, calculations, and preferences are stored locally on your device and are never transmitted to our servers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Location Information */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Does the Application collect precise real time location information of the device?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    This Application does not collect precise information about the location of your mobile device.
                  </p>
                </div>
              </div>
            </Card>

            {/* Third Parties */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Do third parties see and/or have access to information obtained by the Application?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Since the Application does not collect any information, no data is shared with third parties. Your recipes and calculations remain private on your device.
                  </p>
                </div>
              </div>
            </Card>

            {/* Opt-out Rights */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    What are my opt-out rights?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
                  </p>
                </div>
              </div>
            </Card>

            {/* Children */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Children
                  </h3>
                  <div className="text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      The Application is not used to knowingly solicit data from or market to children under the age of 13.
                    </p>
                    <p>
                      The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (pizzadough.app@gmail.com) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Security */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals. All your data remains securely on your device.
                  </p>
                </div>
              </div>
            </Card>

            {/* Changes */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft mx-auto">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Changes
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    This privacy policy is effective as of 2025-10-13
                  </p>
                </div>
              </div>
            </Card>

            {/* Your Consent */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-center">
                    Your Consent
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.
                  </p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-card border hover:shadow-feature transition-all">
              <div className="space-y-6">
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold">
                    Contact Us
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at{" "}
                    <a 
                      href="mailto:pizzadough.app@gmail.com"
                      className="text-primary hover:underline font-semibold"
                    >
                      pizzadough.app@gmail.com
                    </a>
                    .
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    This privacy policy page was generated by App Privacy Policy Generator
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

