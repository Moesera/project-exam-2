
function Contact() {
return (
  <main class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px]">
  <h1 className="text-5xl font-medium text-center mb-14">Contact</h1>
    <form className="font-inder" method="POST">
      <div class="mb-5">
        <label
          for="name"
          p-2 
          class="mb-3 block font-medium"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block font-medium "
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block font-medium"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full p-2 border rounded-lg outline-none focus:border-ocean focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block font-medium"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="p-2 rounded-lg w-full resize-none border bg-white font-medium outline-none focus:border-ocean focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form p-2 border rounded-lg bg-success disabled:bg-gray outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</main>
)
}

export default Contact;