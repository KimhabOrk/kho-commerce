"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Loader2, Check, AlertCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate form data
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Error",
          description: "Please enter a valid email address",
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      
      if (!formBoldEndpoint) {
        toast({
          title: "Error",
          description: "Form configuration is missing. Please try again later.",
          variant: "destructive",
        })
        setIsLoading(false)
        return
      }

      const response = await fetch("https://formbold.com/s/9RKKM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }
      
      setIsSuccess(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Success",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      })
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Success Message */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-900 dark:text-green-100">Message Sent Successfully!</h3>
            <p className="text-sm text-green-800 dark:text-green-200 mt-1">
              Thank you for reaching out. We'll review your message and get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}
      
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      {/* Name Field */}
      <div>
        <Label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          disabled={isLoading}
          className="w-full border border-foreground/30 rounded-xl"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          disabled={isLoading}
          className="w-full border border-foreground/30 rounded-xl"
          required
        />
      </div>

      {/* Subject Field */}
      <div>
        <Label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          disabled={isLoading}
          className="w-full border border-foreground/30 rounded-xl"
          required
        />
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          disabled={isLoading}
          className="w-full min-h-[200px] px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          required
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Check className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  </div>
  )
}
