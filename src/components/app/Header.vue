<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 dark:bg-gray-900 border-b-2 border-b-gray-200 dark:border-b-gray-600"
  >
    <div class="px-2 sm:px-4 max-w-7xl flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img src="@/assets/promotions-logo.png" class="h-9 mr-3 sm:h-12" alt="Promotions Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Promotions
        </span>
      </router-link>
      <div class="relative basis-3/12 lg:basis-3/12 xl:basis-1/3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <i class="fa fa-magnifying-glass text-gray-400" />
          <span class="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar ..."
        />
      </div>
      <div class="items-center justify-between w-auto md:order-1">
        <ul
          class="flex flex-col p-1 gap-2 items-center rounded-lg md:flex-row md:space-x-8 md:text-sm md:font-medium"
        >
          <li class="hidden lg:block">
            <router-link
              to="/category"
              class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              <i class="fa fa-compass text-blue-600 fa-lg mr-1" />
              Categorias
            </router-link>
          </li>
          <li v-if="authStore.isLogged" class="hidden lg:block">
            <router-link
              to="/post/new"
              class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <i class="fa fa-pen fa-lg text-pink-800 mr-1" />
              Postar
            </router-link>
          </li>
          <li v-if="authStore.isLogged" class="hidden lg:block">
            <router-link
              to="/alert"
              class="block text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <i class="fa fa-flag fa-lg text-orange-600 mr-1" />
              Alerta
            </router-link>
          </li>
          <li v-show="authStore.isLogged">
            <dropdown text="bottom">
              <template #trigger>
                <button
                  type="button"
                  class="flex items-center justify-between bg-transparent text-gray-700 md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <div class="flex items-center space-x-4 text-left">
                    <img
                      src="http://github.com/gustavofz.png"
                      class="h-10 w-10 rounded-full"
                      alt=""
                    />
                    <div class="font-medium dark:text-white">
                      <div>@Gustavo</div>
                    </div>
                  </div>
                </button>
              </template>
              <list-group>
                <list-group-item>
                  <template #prefix>
                    <i class="fa fa-right-from-bracket" />
                  </template>
                  Profile
                </list-group-item>
                <list-group-item>
                  <template #prefix>
                    <i class="fa fa-right-from-bracket" />
                  </template>
                  Themes
                </list-group-item>
                <list-group-item>
                  <template #prefix>
                    <i class="fa fa-right-from-bracket" />
                  </template>
                  Messages
                </list-group-item>
                <list-group-item @click="authStore.logout()">
                  <template #prefix>
                    <i class="fa fa-right-from-bracket" />
                  </template>
                  Exit
                </list-group-item>
              </list-group>
            </dropdown>
          </li>
          <li v-show="!authStore.isLogged">
            <button
              @click="authStore.login()"
              class="flex items-center justify-between bg-transparent text-gray-700 md:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Entrar
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'

const authStore = useAuthStore()
</script>
