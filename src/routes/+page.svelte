<script>
    import { initializeApp } from 'firebase/app';
    import {
        getAuth,
        GoogleAuthProvider,
        signInWithPopup,
        setPersistence,
        browserLocalPersistence,
        onAuthStateChanged,
        signOut,
    } from 'firebase/auth';

    import { env as processEnv } from '$env/dynamic/public';

    import {
        PUBLIC_API_KEY,
        PUBLIC_AUTH_DOMAIN,
        PUBLIC_PROJECT_ID,
        PUBLIC_STORAGE_BUCKET,
        PUBLIC_MESSAGING_SENDER_ID,
        PUBLIC_APP_ID,
    } from '$env/static/public';

    const firebaseConfig = {
        apiKey: processEnv.PUBLIC_API_KEY || PUBLIC_API_KEY,
        authDomain: processEnv.PUBLIC_AUTH_DOMAIN || PUBLIC_AUTH_DOMAIN,
        projectId: processEnv.PUBLIC_PROJECT_ID || PUBLIC_PROJECT_ID,
        storageBucket:
            processEnv.PUBLIC_STORAGE_BUCKET || PUBLIC_STORAGE_BUCKET,
        messagingSenderId:
            processEnv.PUBLIC_MESSAGING_SENDER_ID || PUBLIC_MESSAGING_SENDER_ID,
        appId: processEnv.PUBLIC_APP_ID || PUBLIC_APP_ID,
    };

    export const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    let currentUser = null;

    onAuthStateChanged(auth, (user) => (currentUser = user ?? null));

    export async function openGoogleLogin() {
        const googleAuthProvider = new GoogleAuthProvider();

        /** Local persistence */
        await setPersistence(auth, browserLocalPersistence);

        const result = await signInWithPopup(auth, googleAuthProvider);

        const credential = GoogleAuthProvider.credentialFromResult(result);

        /** Used to make operations with firebase */
        const googleToken = credential?.accessToken;

        /** Contains user data, accessToken and refreshToken */
        const userData = result.user;

        currentUser = userData;
    }

    async function appSignOut() {
        await signOut(auth);
    }

    let todos = [];
    let new_todo = '';

    function add(event) {
        if (
            // Pressing Enter
            (event.type === 'keydown' && event.keyCode === 13) ||
            // mouse click
            event.type === 'click'
        ) {
            todos = [
                {
                    checked: false,
                    message: new_todo,
                },
                ...todos,
            ];

            new_todo = '';
        }
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
    {#if currentUser}
        <section>
            Hi {currentUser.displayName}
            <button on:click="{appSignOut}">Sign-out</button>
        </section>
    {:else}
        <section>
            <button
                class="sign-in-btn px-s flex items-center"
                type="button"
                on:click="{openGoogleLogin}"
            >
                <span class="sign-in">Sign in with Google</span>
            </button>
        </section>
    {/if}
    <section class="input-section">
        <input
            bind:value="{new_todo}"
            type="text"
            placeholder="Add your TODO here"
            on:keydown="{add}"
        />
        <button on:click="{add}">Add!</button>
    </section>

    {#if todos.length === 0}
        <section>No todos? Well, a bit lazy aren't we?</section>
    {:else}
        <div class="todo-list">
            {#each todos as todo, index}
                <div class="todo">
                    <input
                        type="checkbox"
                        checked="{todo.checked}"
                        id="{index}"
                    />
                    <label
                        for="{index}"
                        contenteditable
                        bind:innerText="{todo.message}">{todo.message}</label
                    >
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .container {
        padding-top: 12em;
    }

    .input-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }

    .todo-list {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        width: 400px;
        margin: 0px auto;
    }

    .todo {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: left;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 2em;
    }
</style>
