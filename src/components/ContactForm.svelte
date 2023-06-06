<script>
  import Icon from "./Icon.svelte";
  import Button from "./ui/Button.svelte";

  let name = "";
  let lastName = "";
  let email = "";
  let phone = "";
  let message = "";

  let isSending = false;

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let result = document.getElementById("result");
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);

    isSending = true;

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          isSending = false;
          location.href = "/confirmation";
        } else {
          console.log(response);
          result.innerHTML = "Something went wrong!";
        }
      })
      .catch((error) => {
        console.log(error);
        result = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result = "";
        }, 5000);
      });
  }
</script>

<form
  action="https://api.web3forms.com/submit"
  method="POST"
  on:submit={handleSubmit}
  class="needs-validation"
  novalidate>
  <input
    type="hidden"
    name="access_key"
    value="075ce13f-266a-46fd-ad56-ca4fbf2a9dbf" />
  <div class="flex flex-wrap -m-2">
    <div class="p-2 w-1/2">
      <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600"
          >First name</label>
        <input
          type="text"
          id="name"
          placeholder="enter your first name"
          bind:value={name}
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please enter your first name
        </div>
      </div>
    </div>
    <div class="p-2 w-1/2">
      <div class="relative">
        <label for="lastname" class="leading-7 text-sm text-gray-600"
          >Last name</label>
        <input
          type="text"
          id="lastname"
          placeholder="enter your last name"
          bind:value={lastName}
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please enter your last name
        </div>
      </div>
    </div>
    <div class="p-2 w-full">
      <div class="relative">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          name="email"
          bind:value={email}
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <div class="empty-feedback text-red-400 text-sm mt-1">
          Please fill your email
        </div>
        <div class="invalid-feedback text-red-400 text-sm mt-1">
          Please use a valid email
        </div>
      </div>
    </div>
    <div class="p-2 w-full">
      <div class="relative">
        <label for="email" class="leading-7 text-sm text-gray-600"
          >Phone number</label>
        <input
          type="tel"
          id="phone"
          placeholder="enter your phone number"
          name="phone"
          bind:value={phone}
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please enter your phone number
        </div>
      </div>
    </div>
    <div class="p-2 w-full">
      <div class="relative">
        <label for="message" class="leading-7 text-sm text-gray-600"
          >Message</label>
        <textarea
          id="message"
          name="message"
          bind:value={message}
          placeholder="Leave us a message to know more about you..."
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please add a message
        </div>
      </div>
    </div>
    <div class="p-2 w-full">
      <Button
        type="submit"
        disabled={isSending}
        block={true}
        class="flex gap-1 items-center justify-center">
        {isSending ? "Sending..." : "Join World Tour Now"}
        <Icon icon="arrow-right" size="1.2em" />
      </Button>
    </div>
    <div id="result" class="mt-3 text-center" />
  </div>
</form>

<style>
  .invalid-feedback,
  .empty-feedback {
    display: none;
  }

  .was-validated :placeholder-shown:invalid ~ .empty-feedback {
    display: block;
  }

  .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
    display: block;
  }

  .is-invalid,
  .was-validated :invalid {
    border-color: #dc3545;
  }
</style>
