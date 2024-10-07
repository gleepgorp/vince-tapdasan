import CoolButton from '../components/atoms/CoolButton'

export default function Contact() {
  return (
    <section id="contact" className="h-screen my-32 xl:my-36">
      <div className="flex flex-col lg:gap-8 gap-4 justify-center items-center">
        <span className='font-mono lg:text-xl text-lg text-sky-400'>Let's connect!</span>
        <span className='lg:text-6xl text-4xl font-bold text-center'>Get In Touch</span>
        <span className='text-center text-sky-200 font-light lg:text-lg lg:w-96'>
          Reach out to my email if you're looking for a software developer that aligns your tech stack with mine, and I'll respond to it as soon as possible!
        </span>
          <a title='tapdasan.vins@gmail.com' href='https://mail.google.com/mail/u/0/?fs=1&to=tapdasan.vins@gmail.com&su=&body=&tf=cm' target='_blank' className=''>
            <CoolButton>Say hello!</CoolButton>
          </a>
      </div>
    </section>
  )
}

