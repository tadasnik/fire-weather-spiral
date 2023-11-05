<script>
  import "../app.postcss";

  import { page } from "$app/stores";
  import {
    Drawer,
    Sidebar,
    SidebarGroup,
    SidebarWrapper,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
    Navbar,
    NavBrand,
    NavHamburger,
    CloseButton,
  } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  import { DarkMode } from "flowbite-svelte";
  import {
    variables,
    selectedVariable,
    regions,
    selectedRegion,
  } from "$lib/stores/selectStore.js";

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };

  let hidden1 = true;
  const toggleDrawer = () => {
    console.log("hidden");
    hidden1 = false;
  };

  function selectRegion(region) {
    $selectedRegion = [region];
  }
  function selectVariable(variable) {
    console.log(variable === $selectedVariable);
    $selectedVariable = [variable];
    console.log(variable === $selectedVariable[0]);
  }
  let nonActiveClass =
    "transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white";
  let activeClass =
    "flex items-center p-2 pl-11 text-base font-normal text-primary-700 bg-gray-50 dark:bg-gray-700 rounded-lg dark:text-white";
</script>

<header
  class="sticky md:hidden top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800"
>
  <Navbar
    color="default"
    fluid
    class="flex items-center justify-between w-full mx-auto py-1.5 px-4 lg:px-20 px-4'}"
  >
    <NavHamburger onClick={toggleDrawer} class="m-0 mr-3 lg:hidden" />
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-bold">
        FWI indices in UK</span
      >
    </NavBrand>
    <div class="flex items-center ml-auto">
      <DarkMode
        size="lg"
        class="inline-block dark:hover:text-white hover:text-gray-900"
      />
    </div>
  </Navbar>
</header>

<Sidebar
  {nonActiveClass}
  asideClass="overflow-auto hidden md:block fixed inset-0 z-30 h-full w-64 border-r border-gray-200 dark:border-gray-600"
>
  <div class="flex items-center align-middle ml-auto p-2">
    <span class="self-center whitespace-nowrap text-xl font-bold">
      FWI indices in UK</span
    >
  </div>

  <SidebarWrapper
    divClass="px-4 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs dark:bg-gray-900 lg:mr-0 lg:sticky top-20"
  >
    <SidebarGroup>
      <SidebarDropdownWrapper
        label="Select region"
        isOpen
        ulClass="space-y-2.5"
        btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
      >
        {#each $regions as region}
          <SidebarDropdownItem
            label={region}
            on:click={selectRegion(region)}
            {activeClass}
            active={region === $selectedRegion[0]}
          />
        {/each}
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper
        isOpen
        ulClass="space-y-2.5"
        btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
        label="Select FWI component"
        transitionType="fly"
        {transitionParams}
      >
        {#each $variables as variable}
          <SidebarDropdownItem
            label={variable}
            on:click={selectVariable(variable)}
            {activeClass}
            class="uppercase"
            active={variable === $selectedVariable[0]}
          />
        {/each}
      </SidebarDropdownWrapper>
      <div class="flex justify-end items-center p-2 ml-auto">
        <DarkMode
          size="lg"
          class="inline-block dark:hover:text-white hover:text-gray-900"
        />
      </div>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
>
  <CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
  <SidebarWrapper
    divClass="px-4 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs dark:bg-gray-800 lg:mr-0 lg:sticky top-20"
  >
    <SidebarGroup>
      <SidebarDropdownWrapper
        label="Select region"
        isOpen
        ulClass="space-y-2.5"
        btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
      >
        {#each $regions as region}
          <SidebarDropdownItem
            label={region}
            on:click={selectRegion(region)}
            {activeClass}
            active={region === $selectedRegion[0]}
          />
        {/each}
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper
        isOpen
        ulClass="space-y-2.5"
        btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
        label="Select FWI component"
        transitionType="fly"
        {transitionParams}
      >
        {#each $variables as variable}
          <SidebarDropdownItem
            label={variable}
            on:click={selectVariable(variable)}
            {activeClass}
            class="uppercase"
            active={variable === $selectedVariable[0]}
          />
        {/each}
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Drawer>
<!-- <div hidden={$drawerHidden} class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" on:click={closeDrawer} on:keydown={closeDrawer} role="presentation" /> -->
<main class="p-4 md:ml-64 h-full pt-20 md:pt-4">
  <slot />
</main>
