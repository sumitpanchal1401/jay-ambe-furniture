import { useState } from "react";
import { Phone, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSubmitContactForm } from "../hooks/useQueries";
import { toast } from "sonner";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

const INITIAL_FORM: FormState = { name: "", phone: "", message: "" };

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const submitMutation = useSubmitContactForm();

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = "Enter a valid 10-digit mobile number";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitMutation.mutateAsync({
        name: form.name.trim(),
        phoneNumber: form.phone.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
      setForm(INITIAL_FORM);
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/contact-hero.dim_1920x1080.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(0,0,0,0.20), rgba(0,0,0,0.20))' }} />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <div className="mt-4 mx-auto w-16 h-1 bg-white/60 rounded-full" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Jay Ambe Furniture
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  If you want to discuss about furniture work then feel free to contact us. We will
                  meet and discuss and plan the work.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:9924010722"
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-warm hover:shadow-warm-lg transition-all duration-200 group hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#E5E7EB] transition-colors shrink-0">
                    <Phone size={22} className="text-[#374151]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Baldevbhai D Panchal</p>
                    <p className="text-[#374151] font-medium mt-0.5">9924010722</p>
                  </div>
                </a>

                <a
                  href="tel:9714893422"
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-warm hover:shadow-warm-lg transition-all duration-200 group hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center group-hover:bg-[#E5E7EB] transition-colors shrink-0">
                    <Phone size={22} className="text-[#374151]" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Banty B Panchal</p>
                    <p className="text-[#374151] font-medium mt-0.5">9714893422</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-warm-lg">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Thank you for reaching out. We'll contact you shortly to discuss your furniture needs.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 border-[#374151] text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">Send Us a Message</h3>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter your 10-digit mobile number"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-destructive text-xs">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your furniture requirements..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-destructive resize-none" : "resize-none"}
                    />
                    {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-[#374151] text-white hover:bg-[#111827] font-semibold py-6"
                    size="lg"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
