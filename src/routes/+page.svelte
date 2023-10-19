<script>
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
