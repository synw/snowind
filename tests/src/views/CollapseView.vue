<template>
  <div class="mb-5 text-xl text-gray-500 w-max dark:text-gray-300">Collapse</div>
  <button class="btn lighter" @click="collapse = !collapse" v-html="collapse ? 'Open' : 'Close'"></button>
  <div id="sw-collapse" :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }" class="pl-4 mt-4">
    <pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Lobortis elementum nibh tellus
    molestie nunc non. Elit ut aliquam purus sit. Id nibh tortor id aliquet lectus. Tortor aliquam nulla facilisi cras
    fermentum. Aliquam sem et tortor consequat id porta nibh. Consequat ac felis donec et odio pellentesque diam volutpat.
    Et netus et malesuada fames. Facilisis leo vel fringilla est ullamcorper eget nulla. Fermentum dui faucibus in ornare
    quam viverra orci sagittis eu. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
    Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Pulvinar elementum integer enim neque. Tempor id
    eu nisl nunc mi ipsum faucibus vitae. Ultrices gravida dictum fusce ut placerat.

    Placerat in egestas erat imperdiet sed euismod. Egestas dui id ornare arcu. In massa tempor nec feugiat nisl pretium
    fusce id velit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Massa vitae tortor condimentum lacinia
    quis vel eros. Morbi leo urna molestie at elementum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec
    sagittis. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis cras sed felis eget velit aliquet. Nunc
    sed augue lacus viverra vitae congue eu consequat ac. Id faucibus nisl tincidunt eget nullam non nisi. Convallis
    posuere morbi leo urna molestie. Viverra aliquet eget sit amet. Placerat vestibulum lectus mauris ultrices eros in.
    Velit ut tortor pretium viverra.

    Nibh sed pulvinar proin gravida hendrerit lectus a. Non tellus orci ac auctor augue mauris augue. Id interdum velit
    laoreet id donec ultrices. Facilisis sed odio morbi quis commodo odio aenean. Fringilla ut morbi tincidunt augue
    interdum. Malesuada fames ac turpis egestas. Felis donec et odio pellentesque diam volutpat. Vulputate sapien nec
    sagittis aliquam. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus sit amet volutpat
    consequat. Velit ut tortor pretium viverra suspendisse potenti nullam. Nibh sed pulvinar proin gravida hendrerit.
    Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Sapien eget mi proin sed libero. Dignissim diam quis
    enim lobortis scelerisque. Urna nunc id cursus metus aliquam eleifend. Tellus in metus vulputate eu scelerisque felis
    imperdiet. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.

  Blandit aliquam etiam erat velit scelerisque in dictum non. Vitae congue eu consequat ac felis donec et odio. Lorem
  ipsum dolor sit amet consectetur. At ultrices mi tempus imperdiet. Eu feugiat pretium nibh ipsum consequat nisl vel
  pretium. Mauris a diam maecenas sed enim ut sem viverra aliquet. Ornare massa eget egestas purus viverra accumsan in
  nisl. Odio ut enim blandit volutpat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Amet cursus sit amet
  dictum sit amet. Felis eget velit aliquet sagittis id consectetur purus. Ornare arcu dui vivamus arcu. Dolor magna
  eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo. Placerat in egestas erat imperdiet
  sed euismod. Dictum non consectetur a erat nam at lectus urna. Urna duis convallis convallis tellus id interdum velit
  laoreet. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Enim praesent elementum facilisis leo vel fringilla.

  Ullamcorper eget nulla facilisi etiam dignissim diam quis. Imperdiet proin fermentum leo vel orci. Ac tortor dignissim
  convallis aenean et tortor. Nisl purus in mollis nunc sed id. Ultrices neque ornare aenean euismod elementum nisi.
  Eros in cursus turpis massa tincidunt dui ut ornare lectus. Viverra orci sagittis eu volutpat odio facilisis. Eleifend
  quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Enim blandit volutpat maecenas volutpat blandit
  aliquam. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Habitasse platea dictumst
  vestibulum rhoncus est pellentesque. Ultricies tristique nulla aliquet enim tortor at. Ullamcorper morbi tincidunt
  ornare massa. Neque egestas congue quisque egestas diam in arcu cursus. Risus quis varius quam quisque. Eget sit amet
  tellus cras adipiscing enim eu turpis egestas. Purus semper eget duis at tellus at urna condimentum. Tristique
  senectus et netus et malesuada fames ac.</pre>
  </div>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Lobortis elementum nibh tellus
    molestie nunc non. Elit ut aliquam purus sit. Id nibh tortor id aliquet lectus. Tortor aliquam nulla facilisi cras
    fermentum. Aliquam sem et tortor consequat id porta nibh. Consequat ac felis donec et odio pellentesque diam volutpat.
    Et netus et malesuada fames. Facilisis leo vel fringilla est ullamcorper eget nulla. Fermentum dui faucibus in ornare
    quam viverra orci sagittis eu. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
    Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Pulvinar elementum integer enim neque. Tempor id
    eu nisl nunc mi ipsum faucibus vitae. Ultrices gravida dictum fusce ut placerat.

    Placerat in egestas erat imperdiet sed euismod. Egestas dui id ornare arcu. In massa tempor nec feugiat nisl pretium
    fusce id velit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Massa vitae tortor condimentum lacinia
    quis vel eros. Morbi leo urna molestie at elementum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec
    sagittis. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis cras sed felis eget velit aliquet. Nunc
    sed augue lacus viverra vitae congue eu consequat ac. Id faucibus nisl tincidunt eget nullam non nisi. Convallis
    posuere morbi leo urna molestie. Viverra aliquet eget sit amet. Placerat vestibulum lectus mauris ultrices eros in.
    Velit ut tortor pretium viverra.

    Nibh sed pulvinar proin gravida hendrerit lectus a. Non tellus orci ac auctor augue mauris augue. Id interdum velit
    laoreet id donec ultrices. Facilisis sed odio morbi quis commodo odio aenean. Fringilla ut morbi tincidunt augue
    interdum. Malesuada fames ac turpis egestas. Felis donec et odio pellentesque diam volutpat. Vulputate sapien nec
    sagittis aliquam. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus sit amet volutpat
    consequat. Velit ut tortor pretium viverra suspendisse potenti nullam. Nibh sed pulvinar proin gravida hendrerit.
    Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Sapien eget mi proin sed libero. Dignissim diam quis
    enim lobortis scelerisque. Urna nunc id cursus metus aliquam eleifend. Tellus in metus vulputate eu scelerisque felis
    imperdiet. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.

    Blandit aliquam etiam erat velit scelerisque in dictum non. Vitae congue eu consequat ac felis donec et odio. Lorem
    ipsum dolor sit amet consectetur. At ultrices mi tempus imperdiet. Eu feugiat pretium nibh ipsum consequat nisl vel
    pretium. Mauris a diam maecenas sed enim ut sem viverra aliquet. Ornare massa eget egestas purus viverra accumsan in
    nisl. Odio ut enim blandit volutpat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Amet cursus sit amet
    dictum sit amet. Felis eget velit aliquet sagittis id consectetur purus. Ornare arcu dui vivamus arcu. Dolor magna
    eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo. Placerat in egestas erat imperdiet
    sed euismod. Dictum non consectetur a erat nam at lectus urna. Urna duis convallis convallis tellus id interdum velit
    laoreet. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Enim praesent elementum facilisis leo vel fringilla.

    Ullamcorper eget nulla facilisi etiam dignissim diam quis. Imperdiet proin fermentum leo vel orci. Ac tortor dignissim
    convallis aenean et tortor. Nisl purus in mollis nunc sed id. Ultrices neque ornare aenean euismod elementum nisi.
    Eros in cursus turpis massa tincidunt dui ut ornare lectus. Viverra orci sagittis eu volutpat odio facilisis. Eleifend
    quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Enim blandit volutpat maecenas volutpat blandit
    aliquam. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Habitasse platea dictumst
    vestibulum rhoncus est pellentesque. Ultricies tristique nulla aliquet enim tortor at. Ullamcorper morbi tincidunt
    ornare massa. Neque egestas congue quisque egestas diam in arcu cursus. Risus quis varius quam quisque. Eget sit amet
    tellus cras adipiscing enim eu turpis egestas. Purus semper eget duis at tellus at urna condimentum. Tristique
    senectus et netus et malesuada fames ac.<br /><br />

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Lobortis elementum nibh tellus
    molestie nunc non. Elit ut aliquam purus sit. Id nibh tortor id aliquet lectus. Tortor aliquam nulla facilisi cras
    fermentum. Aliquam sem et tortor consequat id porta nibh. Consequat ac felis donec et odio pellentesque diam volutpat.
    Et netus et malesuada fames. Facilisis leo vel fringilla est ullamcorper eget nulla. Fermentum dui faucibus in ornare
    quam viverra orci sagittis eu. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.
    Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Pulvinar elementum integer enim neque. Tempor id
    eu nisl nunc mi ipsum faucibus vitae. Ultrices gravida dictum fusce ut placerat.<br /><br />

    Placerat in egestas erat imperdiet sed euismod. Egestas dui id ornare arcu. In massa tempor nec feugiat nisl pretium
    fusce id velit. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Massa vitae tortor condimentum lacinia
    quis vel eros. Morbi leo urna molestie at elementum. Faucibus scelerisque eleifend donec pretium vulputate sapien nec
    sagittis. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis cras sed felis eget velit aliquet. Nunc
    sed augue lacus viverra vitae congue eu consequat ac. Id faucibus nisl tincidunt eget nullam non nisi. Convallis
    posuere morbi leo urna molestie. Viverra aliquet eget sit amet. Placerat vestibulum lectus mauris ultrices eros in.
    Velit ut tortor pretium viverra.<br /><br />

    Nibh sed pulvinar proin gravida hendrerit lectus a. Non tellus orci ac auctor augue mauris augue. Id interdum velit
    laoreet id donec ultrices. Facilisis sed odio morbi quis commodo odio aenean. Fringilla ut morbi tincidunt augue
    interdum. Malesuada fames ac turpis egestas. Felis donec et odio pellentesque diam volutpat. Vulputate sapien nec
    sagittis aliquam. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Purus sit amet volutpat
    consequat. Velit ut tortor pretium viverra suspendisse potenti nullam. Nibh sed pulvinar proin gravida hendrerit.
    Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Sapien eget mi proin sed libero. Dignissim diam quis
    enim lobortis scelerisque. Urna nunc id cursus metus aliquam eleifend. Tellus in metus vulputate eu scelerisque felis
    imperdiet. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.<br /><br />

    Blandit aliquam etiam erat velit scelerisque in dictum non. Vitae congue eu consequat ac felis donec et odio. Lorem
    ipsum dolor sit amet consectetur. At ultrices mi tempus imperdiet. Eu feugiat pretium nibh ipsum consequat nisl vel
    pretium. Mauris a diam maecenas sed enim ut sem viverra aliquet. Ornare massa eget egestas purus viverra accumsan in
    nisl. Odio ut enim blandit volutpat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Amet cursus sit amet
    dictum sit amet. Felis eget velit aliquet sagittis id consectetur purus. Ornare arcu dui vivamus arcu. Dolor magna
    eget est lorem ipsum dolor sit amet. Maecenas pharetra convallis posuere morbi leo. Placerat in egestas erat imperdiet
    sed euismod. Dictum non consectetur a erat nam at lectus urna. Urna duis convallis convallis tellus id interdum velit
    laoreet. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Enim praesent elementum facilisis leo vel
    fringilla.<br /><br />

    Ullamcorper eget nulla facilisi etiam dignissim diam quis. Imperdiet proin fermentum leo vel orci. Ac tortor dignissim
    convallis aenean et tortor. Nisl purus in mollis nunc sed id. Ultrices neque ornare aenean euismod elementum nisi.
    Eros in cursus turpis massa tincidunt dui ut ornare lectus. Viverra orci sagittis eu volutpat odio facilisis. Eleifend
    quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Enim blandit volutpat maecenas volutpat blandit
    aliquam. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Habitasse platea dictumst
    vestibulum rhoncus est pellentesque. Ultricies tristique nulla aliquet enim tortor at. Ullamcorper morbi tincidunt
    ornare massa. Neque egestas congue quisque egestas diam in arcu cursus. Risus quis varius quam quisque. Eget sit amet
    tellus cras adipiscing enim eu turpis egestas. Purus semper eget duis at tellus at urna condimentum. Tristique
    senectus et netus et malesuada fames ac.
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const collapse = ref(false);
</script>