import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Mail, Palette, ChefHat, Sparkles, GraduationCap, Heart } from 'lucide-react';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'consuelo-portfolio'
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b-4 border-primary bg-gradient-to-br from-accent/20 via-transparent to-chart-1/20">
        <div className="absolute inset-0 bg-gradient-to-r from-chart-2/10 via-chart-3/10 to-chart-4/10 animate-pulse-slow" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-chart-1 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity animate-pulse-slow" />
              <img
                src="/assets/WIN_20260211_10_47_53_Pro.png"
                alt="Consuelo Ayala"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover drop-shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent animate-pulse-slow">
                Consuelo Ayala
              </h1>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="text-base px-5 py-2.5 border-2 border-chart-1 shadow-glow-sm hover:shadow-glow transition-shadow">
                  <Palette className="w-5 h-5 mr-2 text-chart-3" />
                  Traditional Artist
                </Badge>
                <Badge variant="secondary" className="text-base px-5 py-2.5 border-2 border-chart-2 shadow-glow-sm hover:shadow-glow transition-shadow">
                  <ChefHat className="w-5 h-5 mr-2 text-chart-5" />
                  Amateur Chef
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Bio/About Section */}
        <section id="about" className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Sparkles className="w-7 h-7 text-accent animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-accent via-primary to-chart-1 bg-clip-text text-transparent">
                About
              </h2>
              <Sparkles className="w-7 h-7 text-chart-1 animate-pulse" />
            </div>
            <Card className="border-4 border-primary shadow-weird hover:shadow-accent-glow transition-all duration-300 hover:-translate-y-1 bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  As an artist, my practice has always been driven by a curiosity about how we
                  interact with the world around us. Currently, I am focused on bridging the gap
                  between art and the food industry. I aspire to make food that looks both appealing
                  and delicious. I am eager to explore the workforce from the ground up.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-chart-2 via-chart-3 to-chart-4 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Artistic Mediums */}
              <Card className="border-4 border-chart-3 shadow-multi hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Palette className="w-6 h-6 text-chart-3" />
                    Artistic Mediums
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-chart-1 text-chart-1 font-bold hover:bg-chart-1 hover:text-chart-1-foreground transition-colors">Watercolor</Badge>
                    <Badge variant="outline" className="border-2 border-chart-2 text-chart-2 font-bold hover:bg-chart-2 hover:text-chart-2-foreground transition-colors">Acrylic</Badge>
                    <Badge variant="outline" className="border-2 border-chart-3 text-chart-3 font-bold hover:bg-chart-3 hover:text-chart-3-foreground transition-colors">Graphic</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Culinary Skills */}
              <Card className="border-4 border-chart-2 shadow-multi hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <ChefHat className="w-6 h-6 text-chart-5" />
                    Culinary Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-chart-5 text-chart-5 font-bold hover:bg-chart-5 hover:text-chart-5-foreground transition-colors">Baking</Badge>
                    <Badge variant="outline" className="border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors">Stovetop Cooking</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Creative Skills */}
              <Card className="border-4 border-primary shadow-multi hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Creative Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors">Color Theory</Badge>
                    <Badge variant="outline" className="border-2 border-accent text-accent font-bold hover:bg-accent hover:text-accent-foreground transition-colors">Attention to Detail</Badge>
                    <Badge variant="outline" className="border-2 border-chart-4 text-chart-4 font-bold hover:bg-chart-4 hover:text-chart-4-foreground transition-colors">Creative Problem Solving</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Strengths */}
              <Card className="border-4 border-accent shadow-multi hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Personal Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-2 border-chart-1 text-chart-1 font-bold hover:bg-chart-1 hover:text-chart-1-foreground transition-colors">Self-motivated</Badge>
                    <Badge variant="outline" className="border-2 border-chart-2 text-chart-2 font-bold hover:bg-chart-2 hover:text-chart-2-foreground transition-colors">Continuous Learning</Badge>
                    <Badge variant="outline" className="border-2 border-chart-3 text-chart-3 font-bold hover:bg-chart-3 hover:text-chart-3-foreground transition-colors">Patience</Badge>
                    <Badge variant="outline" className="border-2 border-chart-4 text-chart-4 font-bold hover:bg-chart-4 hover:text-chart-4-foreground transition-colors">Dedication</Badge>
                    <Badge variant="outline" className="border-2 border-chart-5 text-chart-5 font-bold hover:bg-chart-5 hover:text-chart-5-foreground transition-colors">Creative</Badge>
                    <Badge variant="outline" className="border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors">Artistic Vision</Badge>
                    <Badge variant="outline" className="border-2 border-accent text-accent font-bold hover:bg-accent hover:text-accent-foreground transition-colors">Kind</Badge>
                    <Badge variant="outline" className="border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors">Usually Very Optimistic</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Art Projects Section */}
        <section id="art-projects" className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-chart-1 via-accent to-chart-5 bg-clip-text text-transparent">
              Art Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Abstract Art Collection */}
              <Card className="group border-4 border-chart-1 hover:border-accent shadow-glow hover:shadow-accent-glow transition-all duration-300 hover:scale-105 hover:-rotate-1 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-chart-1 group-hover:text-accent transition-colors">Abstract Art Collection</CardTitle>
                  <CardDescription className="text-base font-medium">
                    Explore my collection of abstract artworks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-chart-1 to-chart-3 hover:from-chart-3 hover:to-chart-1 text-white font-bold shadow-glow border-2 border-chart-1"
                    size="lg"
                  >
                    <a
                      href="https://photos.app.goo.gl/dP3yhDpvjBr6QLj77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Gallery
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Alcohol Marker Illustrations */}
              <Card className="group border-4 border-chart-5 hover:border-primary shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 hover:rotate-1 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-chart-5 group-hover:text-primary transition-colors">Alcohol Marker Illustrations</CardTitle>
                  <CardDescription className="text-base font-medium">
                    View my detailed marker illustration work
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-chart-5 to-secondary hover:from-secondary hover:to-chart-5 text-white font-bold shadow-glow border-2 border-chart-5"
                    size="lg"
                  >
                    <a
                      href="https://photos.app.goo.gl/5s7KtgtZb9rjvpbM7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Gallery
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Food Projects Section */}
        <section id="food-projects" className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-secondary via-chart-5 to-accent bg-clip-text text-transparent">
              Food Projects
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="group border-4 border-secondary hover:border-chart-2 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-secondary group-hover:text-chart-2 transition-colors">
                    <ChefHat className="w-6 h-6" />
                    Food Projects
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    Discover my culinary creations where art meets food
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-secondary to-chart-2 hover:from-chart-2 hover:to-secondary text-white font-bold shadow-glow border-2 border-secondary"
                    size="lg"
                  >
                    <a
                      href="https://photos.app.goo.gl/Ziw3x1pQm3neoCaN9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Gallery
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-primary via-chart-4 to-chart-1 bg-clip-text text-transparent">
              Education
            </h2>
            <Card className="border-4 border-chart-4 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-chart-4">
                  <GraduationCap className="w-6 h-6" />
                  High School Graduate
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-accent via-primary to-chart-3 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Card className="text-center border-4 border-accent shadow-accent-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  <p className="text-lg text-foreground font-medium">
                    I'm excited to explore opportunities in the art and food industries.
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="gap-2 bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-bold shadow-accent-glow border-2 border-accent text-lg px-8 py-6"
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=randombookcreator@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-primary mt-20 bg-gradient-to-r from-chart-1/10 via-accent/10 to-chart-5/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Separator className="max-w-xs bg-gradient-to-r from-transparent via-primary to-transparent h-1" />
            <p className="text-sm text-foreground font-semibold">
              © {currentYear} Consuelo Ayala. All rights reserved.
            </p>
            <p className="text-sm text-foreground font-medium flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors font-bold"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
