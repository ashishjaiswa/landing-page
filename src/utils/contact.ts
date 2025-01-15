'use server'

// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// })

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const mobile = formData.get('mobile')
    const message = formData.get('message')

    // Validate the data
    if (!name || !email || !mobile || !message) {
      return {
        success: false,
        message: 'Please fill in all fields'
      }
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.toString())) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    // Mobile regex validation (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/
    if (!mobileRegex.test(mobile.toString())) {
      return {
        success: false,
        message: 'Please enter a valid Indian mobile number'
      }
    }

    // Send email
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_USER, // Send to yourself or your company email
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Mobile: ${mobile}
    //     Message: ${message}
    //   `,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Mobile:</strong> ${mobile}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // })

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    }
  }
}

