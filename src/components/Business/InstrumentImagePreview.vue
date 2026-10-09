<template>
  <Teleport to="body">
    <dialog ref="dialog" class="instrument-image-dialog" :aria-label="`${title} image preview`" @close="emit('update:modelValue',null)" @click="onBackdrop">
      <div class="dialog-heading"><span>{{ title }}</span><button type="button" aria-label="Close image preview" @click="emit('update:modelValue',null)">×</button></div>
      <img v-if="modelValue" :src="modelValue" :alt="title" />
    </dialog>
  </Teleport>
</template>
<script setup>
import { nextTick, ref, watch } from 'vue';
const props=defineProps({modelValue:{type:String,default:null},title:{type:String,required:true}});
const emit=defineEmits(['update:modelValue']);
const dialog=ref(null);
watch(()=>props.modelValue,async value=>{
  await nextTick();
  if(value&&!dialog.value.open)dialog.value.showModal();
  else if(!value&&dialog.value.open)dialog.value.close();
});
function onBackdrop(event){if(event.target===dialog.value)emit('update:modelValue',null);}
</script>
<style scoped>
.instrument-image-dialog { position: fixed; inset: 0; margin: auto; max-width: calc(100vw - 32px); max-height: calc(100dvh - 32px); padding: 16px; border: 0; border-radius: var(--vb-radius-panel,12px); background: #fff; }
.instrument-image-dialog::backdrop { background: #17234bc4; }
.dialog-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px; color: #243b7b; font-size: 16px; font-weight: 600; }
.dialog-heading button { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; padding: 0; border: 1px solid #dce1e8; border-radius: var(--vb-radius-control,6px); background: #fff; color: #243b7b; font-size: 28px; cursor: pointer; flex-shrink: 0; }
.instrument-image-dialog img { display: block; max-width: min(100%,1100px); max-height: calc(100dvh - 124px); margin: auto; object-fit: contain; }
.dialog-heading button:focus-visible { outline: 2px solid #4e3fa5; outline-offset: 2px; }
</style>
