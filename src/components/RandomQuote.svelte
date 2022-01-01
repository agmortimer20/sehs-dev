<script>
    export let alignment = "left";

    let quotes = [
        "I may not be the best, but I'm sure not the cheapest. 💰",
        "Now with more soy! 🌱",
        "Mortimers don't quit, we get fired. 🔥"
    ]
</script>

<figure class="text-{alignment}">
    <blockquote class="blockquote">
        {quotes[parseInt(Math.random() * quotes.length)]}
    </blockquote>
    <figcaption class="blockquote-footer">
        Mr. Mortimer
    </figcaption>
</figure>