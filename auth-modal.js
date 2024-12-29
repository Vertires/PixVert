html = Object.create(null)
html['modals/error/error.html'] = '<div>\n  <p class="text-sm text-gray-500 mb-2">An error occured during your action:</p>\n  <p\n    class="text-lg font-bold text-red-500 mb-2"\n    x-text="$store.authModal.error.errorMsg"\n  ></p>\n  <p class="text-sm text-gray-500 mb-2">\n    Please try again or contact us if the problem persists.\n  </p>\n</div>\n'
html['modals/forgotPassword/forgotPassword.html'] = '<div x-init="$store.authModal.forgotPassword.guard()">\n  <form\n    x-init=""\n    class="mt-6"\n    @submit.prevent="$store.authModal.forgotPassword.onSubmit()"\n  >\n    <div>\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Email</label\n      >\n      <input\n        x-model="$store.authModal.forgotPassword.email"\n        type="email"\n        required="required"\n        placeholder="admin@email.com"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-6 flex justify-center">\n      <button\n        type="submit"\n        x-bind:disabled="$store.authModal.forgotPassword.isLoading"\n        class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n      >\n        <p>Reset password</p>\n        <template hidden x-if="$store.authModal.forgotPassword.isLoading">\n          <svg\n            class="w-4 h-4 animate-spin"\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n          >\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n            ></path>\n          </svg>\n        </template>\n      </button>\n    </div>\n  </form>\n\n  <template hidden x-if="$store.authModal.forgotPassword.errorMsg">\n    <p\n      x-text="$store.authModal.forgotPassword.errorMsg"\n      class="font-light mt-6 text-center text-red-500"\n    ></p>\n  </template>\n\n  <div\n    class="mt-8 text-xs text-center text-gray-600 flex items-center justify-center space-x-1"\n  >\n    <p>Did you just remember?</p>\n    <button\n      type="button"\n      x-on:click="$store.authModal.goTo(\'signIn\')"\n      class="font-medium text-brand-600 underline hover:text-brand-900"\n    >\n      Back to Sign In\n    </button>\n  </div>\n</div>\n'
html['modals/forgotPasswordFinish/forgotPasswordFinish.html'] = '<div>\n  <p class="text-sm text-gray-500 mb-2">We emailed a reset password link to</p>\n  <p\n    class="text-lg font-bold text-black mb-2"\n    x-text="$store.authModal.forgotPassword.email"\n  ></p>\n  <p class="text-sm text-gray-500 mb-2">Click the link to set new password.</p>\n</div>\n'
html['modals/forgotPasswordNew/forgotPasswordNew.html'] = '<div x-init="$store.authModal.forgotPasswordNew.guard()">\n  <form\n    class="mt-6"\n    @submit.prevent="$store.authModal.forgotPasswordNew.onSubmit()"\n  >\n    <div>\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Enter new Password</label\n      >\n      <input\n        x-model="$store.authModal.forgotPasswordNew.password"\n        required="required"\n        type="password"\n        placeholder="Password"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-4">\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Confirm new Password</label\n      >\n      <input\n        x-model="$store.authModal.forgotPasswordNew.passwordAgain"\n        required="required"\n        type="password"\n        placeholder="Password"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-6 flex justify-center">\n      <button\n        type="submit"\n        x-bind:disabled="$store.authModal.forgotPasswordNew.isLoading"\n        class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n      >\n        <p>Set New Password</p>\n        <template hidden x-if="$store.authModal.forgotPasswordNew.isLoading">\n          <svg\n            class="w-4 h-4 animate-spin"\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n          >\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n            ></path>\n          </svg>\n        </template>\n      </button>\n    </div>\n\n    <template hidden x-if="$store.authModal.forgotPasswordNew.errorMsg">\n      <p\n        x-text="$store.authModal.forgotPasswordNew.errorMsg"\n        class="font-light mt-6 text-center text-red-500"\n      ></p>\n    </template>\n  </form>\n</div>\n'
html['modals/magicUrl/magicUrl.html'] = '<div x-init="$store.authModal.magicUrl.guard()">\n  <form\n    x-init=""\n    class="mt-6"\n    @submit.prevent="$store.authModal.magicUrl.onSubmit()"\n  >\n    <div>\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Email</label\n      >\n      <input\n        x-model="$store.authModal.magicUrl.email"\n        type="email"\n        required="required"\n        placeholder="admin@email.com"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-6 flex justify-center">\n      <button\n        type="submit"\n        x-bind:disabled="$store.authModal.magicUrl.isLoading"\n        class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n      >\n        <p>Send Magic Link</p>\n        <template hidden x-if="$store.authModal.magicUrl.isLoading">\n          <svg\n            class="w-4 h-4 animate-spin"\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n          >\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n            ></path>\n          </svg>\n        </template>\n      </button>\n    </div>\n  </form>\n\n  <template hidden x-if="$store.authModal.magicUrl.errorMsg">\n    <p\n      x-text="$store.authModal.magicUrl.errorMsg"\n      class="font-light mt-6 text-center text-red-500"\n    ></p>\n  </template>\n\n  <div\n    class="mt-8 text-xs text-center text-gray-600 flex items-center justify-center space-x-1"\n  >\n    <p class="">Do you have a password?</p>\n    <button\n      type="button"\n      x-on:click="$store.authModal.goTo(\'signIn\')"\n      class="font-medium text-brand-600 underline hover:text-brand-900"\n    >\n      Back to Sign In\n    </button>\n  </div>\n</div>\n'
html['modals/magicUrlFinish/magicUrlFinish.html'] = '<div>\n  <p class="text-sm text-gray-500 mb-2">We emailed a magic link to </p>\n  <p class="text-lg font-bold text-black mb-2" x-text="$store.authModal.magicUrl.email"></p>\n  <p class="text-sm text-gray-500 mb-2">Click the link to log in or sign up.</p>\n</div>\n'
html['modals/profile/profile.html'] = '<div x-data x-init="$store.authModal.profile.guard()">\n  <template x-if="$store.authModal.profile.profile">\n    <div>\n      <p class="text-sm text-gray-500 mb-2">Logged in as</p>\n      <p>\n        <span\n          x-text="$store.authModal.profile.profile.name"\n          class="text-lg text-black"\n        ></span>\n        <span class="text-auth-gray-400">at</span>\n        <span\n          x-text="$store.authModal.profile.profile.email"\n          class="text-lg text-black"\n        ></span>\n      </p>\n\n      <div class="mt-6 flex justify-center">\n        <button\n          x-on:click="$store.authModal.profile.logOut()"\n          x-bind:disabled="$store.authModal.profile.isLoading"\n          type="button"\n          class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n        >\n          <p>Log Out</p>\n          <template hidden x-if="$store.authModal.profile.isLoading">\n            <svg\n              class="w-4 h-4 animate-spin"\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n            >\n              <circle\n                class="opacity-25"\n                cx="12"\n                cy="12"\n                r="10"\n                stroke="currentColor"\n                stroke-width="4"\n              ></circle>\n              <path\n                class="opacity-75"\n                fill="currentColor"\n                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n              ></path>\n            </svg>\n          </template>\n        </button>\n      </div>\n\n      <template hidden x-if="$store.authModal.profile.errorMsg">\n        <p\n          x-text="$store.authModal.profile.errorMsg"\n          class="font-light mt-6 text-center text-red-500"\n        ></p>\n      </template>\n    </div>\n  </template>\n</div>\n'
html['modals/signIn/signIn.html'] = '<div x-init="$store.authModal.signIn.guard()">\n  <form class="mt-6" @submit.prevent="$store.authModal.signIn.onSubmit()">\n    <div>\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Email</label\n      >\n      <input\n        required="required"\n        x-model="$store.authModal.signIn.email"\n        type="email"\n        placeholder="admin@email.com"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n    <div class="mt-4">\n      <div class="flex mb-2 items-center text-center justify-between">\n        <label class="text-auth-gray-900 block text-sm font-medium"\n          >Password</label\n        >\n        <button\n          type="button"\n          x-on:click="$store.authModal.goTo(\'forgotPassword\')"\n          class="font-medium text-sm text-auth-gray-900 hover:underline"\n        >\n          Forgot?\n        </button>\n      </div>\n      <input\n        required="required"\n        x-model="$store.authModal.signIn.password"\n        type="password"\n        placeholder="Password"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n    <div class="mt-6 flex justify-center">\n      <button\n        type="submit"\n        x-bind:disabled="$store.authModal.signIn.isLoading"\n        class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n      >\n        <p>Sign In</p>\n        <template hidden x-if="$store.authModal.signIn.isLoading">\n          <svg\n            class="w-4 h-4 animate-spin"\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n          >\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n            ></path>\n          </svg>\n        </template>\n      </button>\n    </div>\n  </form>\n\n  <template hidden x-if="$store.authModal.signIn.errorMsg">\n    <p\n      x-text="$store.authModal.signIn.errorMsg"\n      class="font-light mt-6 text-center text-red-500"\n    ></p>\n  </template>\n\n  <div class="flex items-center justify-between mt-6 mb-6">\n    <span class="w-2/5 border-b"></span>\n    <p class="text-sm text-center text-black uppercase">or</p>\n    <span class="w-2/5 border-b"></span>\n  </div>\n\n  <div class="flex items-center mb-4">\n    <button\n      x-on:click="$store.authModal.goTo(\'magicUrl\')"\n      type="button"\n      class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium rounded-md ring-auth-gray-100 hover:bg-auth-gray-200 bg-auth-gray-100 text-auth-gray-900 focus:ring-4 hover:border-auth-gray-100 focus:bg-auth-gray-100 focus:border-auth-gray-100 focus:outline-none"\n    >\n      <svg class="w-4 h-4 font-extrabold mx-2 fill-current" viewBox="0 0 24 24">\n        <path\n          d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"\n        />\n      </svg>\n      <span class="mx-2 sm:inline">Sign in with Magic Link</span>\n    </button>\n  </div>\n\n  <template x-if="$store.authModal.allowedOauthProviders.length > 0">\n    <div class="grid grid-cols-12 gap-4">\n      <template x-for="provider in $store.authModal.allowedOauthProviders">\n        <div x-html="provider" class="col-span-6"></div>\n      </template>\n    </div>\n  </template>\n\n  <div\n    class="mt-8 text-xs text-center text-gray-600 flex items-center justify-center space-x-1"\n  >\n    <p>Don\'t have an account?</p>\n    <button\n      type="button"\n      x-on:click="$store.authModal.goTo(\'signUp\')"\n      class="font-medium text-brand-600 underline hover:text-brand-900"\n    >\n      Create One\n    </button>\n  </div>\n</div>\n'
html['modals/signUp/signUp.html'] = '<div x-init="$store.authModal.signUp.guard()">\n  <form class="mt-6" @submit.prevent="$store.authModal.signUp.onSubmit()">\n    <div>\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Name</label\n      >\n      <input\n        x-model="$store.authModal.signUp.name"\n        required="required"\n        type="text"\n        placeholder="John Walker"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-4">\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Email</label\n      >\n      <input\n        x-model="$store.authModal.signUp.email"\n        required="required"\n        type="email"\n        placeholder="admin@appwrite.io"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-4">\n      <label class="text-auth-gray-900 mb-2 block text-sm font-medium"\n        >Password</label\n      >\n      <input\n        x-model="$store.authModal.signUp.password"\n        required="required"\n        type="password"\n        placeholder="Password"\n        class="bg-auth-gray-100 ring-auth-gray-800 block rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-1 p-4 w-full"\n      />\n    </div>\n\n    <div class="mt-6 flex justify-center">\n      <button\n        type="submit"\n        x-bind:disabled="$store.authModal.signUp.isLoading"\n        class="disabled:opacity-75 disabled:hover:bg-auth-gray-900 flex items-center justify-center space-x-2 ring-auth-gray-200 bg-auth-gray-900 rounded-lg px-12 py-3 w-full font-bold text-white hover:bg-black focus:ring-4"\n      >\n        <p>Sign Up</p>\n        <template hidden x-if="$store.authModal.signUp.isLoading">\n          <svg\n            class="w-4 h-4 animate-spin"\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n          >\n            <circle\n              class="opacity-25"\n              cx="12"\n              cy="12"\n              r="10"\n              stroke="currentColor"\n              stroke-width="4"\n            ></circle>\n            <path\n              class="opacity-75"\n              fill="currentColor"\n              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"\n            ></path>\n          </svg>\n        </template>\n      </button>\n    </div>\n\n    <template hidden x-if="$store.authModal.signUp.errorMsg">\n      <p\n        x-text="$store.authModal.signUp.errorMsg"\n        class="font-light mt-6 text-center text-red-500"\n      ></p>\n    </template>\n  </form>\n\n  <div\n    class="mt-8 text-xs text-center text-gray-600 flex items-center justify-center space-x-1"\n  >\n    <p class="">Already have an account?</p>\n    <button\n      type="button"\n      x-on:click="$store.authModal.goTo(\'signIn\')"\n      class="font-medium text-brand-600 underline hover:text-brand-900"\n    >\n      Sign In\n    </button>\n  </div>\n</div>\n'
html['utils/providers/amazon.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'amazon\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/a/1/amazon-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Amazon</span>\n</button>\n'
html['utils/providers/apple.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'apple\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/a/68/apple.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Apple</span>\n</button>\n'
html['utils/providers/bitbucket.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'bitbucket\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/b/74/bitbucket-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with BitBucket</span>\n</button>\n'
html['utils/providers/bitly.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'bitly\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/b/57/bitly.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Bitly</span>\n</button>\n'
html['utils/providers/box.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'box\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/b/39/box.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Box</span>\n</button>\n'
html['utils/providers/discord.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'discord\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/d/38/discord.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Discord</span>\n</button>\n'
html['utils/providers/dropbox.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'dropbox\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/d/36/dropbox.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Dropbox</span>\n</button>\n'
html['utils/providers/facebook.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'facebook\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/f/9/facebook.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Facebook</span>\n</button>\n'
html['utils/providers/github.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'github\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with GitHub</span>\n</button>\n'
html['utils/providers/gitlab.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'gitlab\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/g/37/gitlab.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with GitLab</span>\n</button>\n'
html['utils/providers/google.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'google\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Google</span>\n</button>\n'
html['utils/providers/linkedin.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'linkedin\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Linkedin</span>\n</button>\n'
html['utils/providers/microsoft.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'microsoft\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/m/95/microsoft.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Microsoft</span>\n</button>\n'
html['utils/providers/notion.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'notion\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/n/50/notion.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Notion</span>\n</button>\n'
html['utils/providers/paypal.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'paypal\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/p/42/paypal-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with PayPal</span>\n</button>\n'
html['utils/providers/paypalSandbox.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'paypalSandbox\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/p/42/paypal-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with PayPal (Box)</span>\n</button>\n'
html['utils/providers/salesforce.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'salesforce\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/s/3/salesforce.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Salesforce</span>\n</button>\n'
html['utils/providers/slack.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'slack\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/s/40/slack-new.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Slack</span>\n</button>\n'
html['utils/providers/spotify.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'spotify\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/s/89/spotify.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Spotify</span>\n</button>\n'
html['utils/providers/stripe.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'stripe\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/s/44/stripe.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Stripe</span>\n</button>\n'
html['utils/providers/tradeshift.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'tradeshift\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img src="https://svgshare.com/i/fec.svg" class="w-4 h-4 mx-2 fill-current" />\n  <span class="mx-2 sm:inline">Sign in with Tradeshift</span>\n</button>\n'
html['utils/providers/tradeshiftBox.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'tradeshiftBox\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img src="https://svgshare.com/i/fec.svg" class="w-4 h-4 mx-2 fill-current" />\n  <span class="mx-2 sm:inline">Sign in with Tradeshift (Box)</span>\n</button>\n'
html['utils/providers/twitch.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'twitch\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/t/25/twitch-purple.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Twitch</span>\n</button>\n'
html['utils/providers/vk.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'vk\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/v/7/vk.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with VK</span>\n</button>\n'
html['utils/providers/wordpress.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'wordpress\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/w/94/wordpress-blue.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with WordPress</span>\n</button>\n'
html['utils/providers/yahoo.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'yahoo\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/y/53/yahoo-icon.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Yahoo</span>\n</button>\n'
html['utils/providers/yammer.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'yammer\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/m/11/microsoft-yammer.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Yammer</span>\n</button>\n'
html['utils/providers/yandex.html'] = '<button\n  x-on:click="$store.authModal.signIn.onLodingOauth(\'yandex\')"\n  type="button"\n  class="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-black transition-colors duration-200 transform bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100"\n>\n  <img\n    src="https://cdn.cdnlogo.com/logos/y/82/yandex.svg"\n    class="w-4 h-4 mx-2 fill-current"\n  />\n  <span class="mx-2 sm:inline">Sign in with Yandex</span>\n</button>\n'
var globalStore = {
    pagesConfig: []
};
var globalAdapters = {};
var globalProviders = {};
globalAdapters["appwrite"] = {
  sdk: null,

  oauthSuccess: null,
  oauthError: null,
  magicUrl: null,
  passwordRecoveryUrl: null,

  async setUp(config) {
    this.sdk = new Appwrite();
    this.sdk.setEndpoint(config.endpoint).setProject(config.projectId);

    this.oauthSuccess = window.authModal.oauthSuccessUrl + "?type=oauth";
    this.oauthError = window.authModal.oauthErrorUrl + "?type=oauth";
    this.magicUrl = window.authModal.magicUrlRedirect + "?type=magicUrl";
    this.passwordRecoveryUrl = window.authModal.passwordRecoveryRedirect + "?type=recovery";
  },

  getProviders() {
    return [
      "amazon",
      "apple",
      "bitbucket",
      "bitly",
      "box",
      "discord",
      "dropbox",
      "facebook",
      "github",
      "gitlab",
      "google",
      "linkedin",
      "microsoft",
      "notion",
      "paypal",
      "paypalSandbox",
      "salesforce",
      "slack",
      "spotify",
      "tradeshift",
      "tradeshiftBox",
      "twitch",
      "vk",
      "yahoo",
      "yammer",
      "yandex",
      "wordpress",
      "stripe",
    ];
  },

  async getProfile() {
    return await this.sdk.account.get();
  },

  async logOut() {
    return await this.sdk.account.deleteSession("current");
  },

  async signIn(email, password) {
    return await this.sdk.account.createSession(email, password);
  },

  async signInOauth(provider) {
    return await this.sdk.account.createOAuth2Session(
      provider,
      this.oauthSuccess,
      this.oauthError
    );
  },

  async signInMagicUrl(email) {
    const username = email.split('@')[0];
    return await this.sdk.account.createMagicURLSession(
      username,
      email,
      this.magicUrl
    );
  },

  async signInMagicUrlFinish(userId, secret) {
    return await this.sdk.account.updateMagicURLSession(userId, secret);
  },

  async signUp(name, email, password) {
    const username = email.split('@')[0];
    return await this.sdk.account.create(username, email, password, name);
  },

  async resetPassword(email) {
    return await this.sdk.account.createRecovery(
      email,
      this.passwordRecoveryUrl
    );
  },

  async resetPasswordFinish(userId, secret, password, passwordAgain) {
    return await this.sdk.account.updateRecovery(
      userId,
      secret,
      password,
      passwordAgain
    );
  },
};

var pageId = "error";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Whoops, a problem!",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  errorMsg: null,
};

var pageId = "forgotPassword";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Forgot Password",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  email: "",

  errorMsg: null,
  isLoading: false,

  async guard() {
    this.email = "";

    const store = Alpine.store("authModal");
    const profile = await store.getProfile();

    if (profile) {
      store.goTo("profile");
    }
  },

  async onSubmit() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.resetPassword) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.resetPassword(this.email);
      store.goTo("forgotPasswordFinish");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },
};

var pageId = "forgotPasswordFinish";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Check your email inbox",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

// Uses 'forgotPassword' store

var pageId = "forgotPasswordNew";

globalStore.pagesConfig.push({
  id: pageId,
  title: "New Password",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  secret: "", // Set before opening modal
  userId: "", // Set before opening modal

  password: "",
  passwordAgain: "",

  errorMsg: null,
  isLoading: false,

  async guard() {
    this.password = "";
    this.passwordAgain = "";

    const store = Alpine.store("authModal");
    const profile = await store.getProfile();

    if (profile) {
      store.goTo("profile");
    }
  },

  async onSubmit() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.resetPasswordFinish) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.resetPasswordFinish(
        this.userId,
        this.secret,
        this.password,
        this.passwordAgain
      );
      store.goTo("signIn");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },
};

var pageId = "magicUrl";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Sign In with Magic Link",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  email: "",

  errorMsg: null,
  isLoading: false,

  async guard() {
    this.email = "";

    const store = Alpine.store("authModal");
    const profile = await store.getProfile();

    if (profile) {
      store.goTo("profile");
    }
  },

  async onSubmit() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.signInMagicUrl) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.signInMagicUrl(this.email);
      store.goTo("magicUrlFinish");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },
};

var pageId = "magicUrlFinish";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Check your email inbox",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  async guard() {},

  async onFinish(userId, secret) {
    const store = Alpine.store("authModal");

    try {
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.signInMagicUrlFinish) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.signInMagicUrlFinish(userId, secret);
    } catch (err) {
      console.error(err);
      store.error.errorMsg = err.message ?? err;
      store.open("error");
    }
  },
};

var pageId = "profile";

globalStore.pagesConfig.push({
  id: pageId,
  title: "My Account",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  profile: null,

  isLoading: false,
  errorMsg: null,

  async guard() {
    const store = Alpine.store("authModal");
    this.profile = await store.getProfile();

    if (!this.profile) {
      store.goTo("signIn");
    }
  },

  async logOut() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.logOut) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.logOut();
      await store.getProfile(true);

      store.goTo("signIn");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },
};

var pageId = "signIn";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Sign In",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  email: "",
  password: "",

  errorMsg: null,
  isLoading: false,

  async guard() {
    this.email = "";
    this.password = "";

    const store = Alpine.store("authModal");
    const profile = await store.getProfile();

    if (profile) {
      store.goTo("profile");
    }
  },

  async onLodingOauth(oauthAdapter) {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.signInOauth) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.signInOauth(oauthAdapter);
    } catch (err) {
      this.errorMsg = err.message || err;
      this.isLoading = false;
    } finally {
      // this.isLoading = false;
    }
  },

  async onSubmit() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.signIn) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.signIn(this.email, this.password);

      store.goTo("profile");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },

  onSubmitOauth(adapter) {
    alert(adapter);
  },
};

var pageId = "signUp";

globalStore.pagesConfig.push({
  id: pageId,
  title: "Sign Up",
  template: html["modals/" + pageId + "/" + pageId + ".html"],
});

globalStore[pageId] = {
  name: "",
  email: "",
  password: "",

  errorMsg: null,
  isLoading: false,

  async guard() {
    this.name = "";
    this.email = "";
    this.password = "";

    const store = Alpine.store("authModal");
    const profile = await store.getProfile();

    if (profile) {
      store.goTo("profile");
    }
  },

  async onSubmit() {
    try {
      if (this.isLoading) {
        return;
      }

      this.isLoading = true;
      this.errorMsg = null;

      const store = Alpine.store("authModal");
      const adapter = store.adapter;

      if (!adapter) {
        throw new Error("No adapter loaded.");
      }

      if (!adapter.signUp || !adapter.signIn) {
        throw new Error("Adapter does not support this method.");
      }

      await adapter.signUp(this.name, this.email, this.password);
      await adapter.signIn(this.email, this.password);

      store.goTo("profile");
    } catch (err) {
      this.errorMsg = err.message || err;
    } finally {
      this.isLoading = false;
    }
  },
};

var files = Object.keys(html).filter((file) => file.startsWith('utils/providers/'));
for(const file of files) {
  const key = file.split("utils/providers/").join("").split(".html").join("");
  globalProviders[key] = html[file];
}

(async () => {
  // Setup fonts and colors
  document.body.insertAdjacentHTML(
    "beforeend",
    `<style> @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');</style>`
  );

  tailwind.config = tailwind.config || {};
  tailwind.config = {
    ...tailwind.config,
    theme: {
      extend: {
        colors: {
          "auth-gray": {
            50: "#f6f9fe",
            100: "#eef4fc",
            200: "#dce5f6",
            300: "#c2d0ea",
            400: "#869bc6",
            500: "#556b9a",
            600: "#3a4d76",
            700: "#263962",
            800: "#132146",
            900: "#040d30",
          },
        },
      },
    },
  };

  var alpineStore = Object.assign({}, globalStore, {
    // Defined by other files

    allowedOauthProviders: [],
    adapter: null,
    opened: false,
    currentPage: null,
    accountProfile: null,

    async getProfile(force = false) {
      if (this.accountProfile && !force) {
        return this.accountProfile;
      }

      try {
        this.accountProfile = await this.adapter.getProfile();
      } catch (err) {
        this.accountProfile = null;
      }

      return this.accountProfile;
    },

    async init() {
      this.goTo("signIn");

      await this.prepareAdapter();
    },

    async prepareAdapter() {
      const { config, adapter } = window.authModal;
      const oauths = window.authModal.oauths || [];

      this.adapter = globalAdapters[adapter];
      await this.adapter.setUp(config);

      this.allowedOauthProviders = [];
      const adapterProviders = this.adapter.getProviders();
      const allowedProviders = Object.keys(globalProviders)
        .filter((provider) => adapterProviders.includes(provider))
        .filter((provider) => oauths.includes(provider));
      this.allowedOauthProviders = allowedProviders.map(
        (provider) => globalProviders[provider]
      );
    },

    open(page) {
      this.opened = true;

      if (page) {
        this.goTo(page);
      }
    },

    close(reset = true) {
      this.opened = false;

      if (reset) {
        setTimeout(() => {
          this.goTo("signIn");
        }, 500);
      }
    },

    goTo(page) {
      this.currentPage = this.pagesConfig.find((p) => p.id === page);
    },
  });

  // Define Alpine.js stores
  Alpine.store("authModal", alpineStore);

  // Insert Auth Modal
  var authModal = `
    <div
      class="fixed z-[9999] inset-0"
      style="font-family: 'Montserrat', sans-serif;"
      x-show="$store.authModal.opened"
      x-transition:enter="transition ease-out duration-300"
      x-transition:enter-start="opacity-0"
      x-transition:enter-end="opacity-100"
      x-transition:leave="transition ease-in duration-300"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
    >
      <div class="w-full h-full relative">
        <div class="absolute inset-0 bg-black opacity-50" x-on:click="$store.authModal.close()"></div>
        <div class="relative w-full h-full pt-10 overflow-y-auto pb-10" x-on:click="$store.authModal.close()">
          <div class="mx-auto w-full max-w-2xl rounded-xl bg-white p-6" x-on:click="$event.stopPropagation()">
            <div class="flex justify-between items-center">
              <h1 class="text-auth-gray-900 mb-4 text-2xl font-bold" x-text="$store.authModal.currentPage.title"></h1>
              <button type="button" x-on:click="$store.authModal.close()" class="p-3 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </button>
            </div>
            <div class="mt-6">
              <div x-html="$store.authModal.currentPage.template"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

  document.body.insertAdjacentHTML("beforeend", authModal);

  // To ensure we show profile if already logged in, without waiting
  // Fetch profile on background when page loads
  var storeSnapshot = Alpine.store("authModal");
  storeSnapshot.getProfile(true);

  var urlSearchParams = new URLSearchParams(window.location.search);
  var params = Object.fromEntries(urlSearchParams.entries());

  if (params.userId && params.secret) {
    window.history.pushState({}, document.title, window.location.pathname);
    
    if (params.type === 'magicUrl') {
      // Magic URL functionality
      var storeSnapshot = Alpine.store("authModal");
      storeSnapshot.magicUrlFinish
        .onFinish(params.userId, params.secret)
        .then(() => {
          storeSnapshot.getProfile(true);
        });
    } else if(params.type === 'recovery') {
      // Password recovery functionality
      var storeSnapshot = Alpine.store("authModal");
      storeSnapshot.forgotPasswordNew.secret = params.secret;
      storeSnapshot.forgotPasswordNew.userId = params.userId;
      storeSnapshot.open("forgotPasswordNew");
    }
  }
})();
