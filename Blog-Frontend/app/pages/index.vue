<template>
	<div>
		<h1>Welcome To the Home Page</h1>
		<h2>Button to non existant page to trigger error</h2>
        <UButton
          color="neutral"
          variant="ghost"
          to="/temp/"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />

	</div>
</template>
