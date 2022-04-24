<script>
  import { onMount } from "svelte"

  let anime
  let math

  let degree = 0
  let key = 0
  let plaintext = ''
  let ciphertext = ''
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  $: fowardDisabled = key == 25
  $: backwardDisabled = key == 0

  onMount(async () => {
    anime = await import("animejs/lib/anime.es.js")
    anime = anime.default

    math = await import ("mathjs")
  })

  function increaseDial() {
    degree += 13.8
    key++
    anime({ targets: "#dial-inner", rotate: degree })
  }

  function decreaseDial() {
    degree -= 13.8
    key--
    anime({ targets: "#dial-inner", rotate: degree })
  }

  function encrypt() {
    let text = ''

    for (let char of plaintext.toUpperCase()) {
      text += LETTERS.includes(char) ? LETTERS[math.mod(LETTERS.indexOf(char) + key,26)] : char;
    }

    ciphertext = text
  }

  function decrypt() {
    let text = ''

    for (let char of ciphertext.toUpperCase()) {
      text += LETTERS.includes(char) ? LETTERS[math.mod(LETTERS.indexOf(char) - key, 26)] : char;
    }

    plaintext = text
  }
</script>

<div class="row justify-content-center">
  <!-- Dial -->
  <div class="col-sm-12 col-md-4">
    <div class="position-relative">
      <img src="/assets/img/caesar-dial-outer.png" class="img-fluid" alt="dial outer" />
      <div class="overlay">
        <img src="/assets/img/caesar-dial-inner.png" id="dial-inner" class="d-block mx-auto w-75" alt="dial inner" />
      </div>
    </div>
  </div>

  <!-- Form -->
  <div class="col-sm-12 col-md-6">
    <div class="mb-3">
      <label for="key" class="form-label">Key:</label>
      <input id="key" type="text" class="form-control w-auto" readonly bind:value={key}>
      <div class="row mt-3">
        <div class="col-auto">
          <button class="btn btn-primary" on:click={decreaseDial} disabled={backwardDisabled}>Backward</button>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" on:click={increaseDial} disabled={fowardDisabled}>Forward</button>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="plaintext">Plaintext:</label>
      <textarea id="plaintext" class="form-control" rows="3" bind:value={plaintext}></textarea>
      <button class="form-control btn btn-primary mt-2" on:click={encrypt}>Encrypt</button>
    </div>
    <div class="mb-3">
      <label for="ciphertext">Ciphertext:</label>
      <textarea id="ciphertext" class="form-control" rows="3" bind:value={ciphertext}></textarea>
      <button class="form-control btn btn-primary mt-2" on:click={decrypt}>Decrypt</button>
    </div>
  </div>
</div>

<style>
  .overlay {
    position: absolute;
    bottom: 13%;
    z-index: 1;
  }
</style>