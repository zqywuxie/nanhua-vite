<template>
  <section class="service-contact" aria-labelledby="service-contact-title">
    <div>
      <p class="contact-eyebrow">Project enquiries</p>
      <h2 id="service-contact-title">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <router-link to="/contact_us">{{ label }} <span aria-hidden="true">→</span></router-link>
  </section>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Contact us' },
  title: { type: String, default: "Let's discuss your project" },
  description: { type: String, default: 'Share your research question, materials and goals with our team.' },
});
</script>

<style scoped>
.service-contact { border-radius: var(--vb-radius-panel, 12px); display: flex; align-items: center; justify-content: space-between; gap: 36px; margin-top: 64px; padding: 32px 36px; background: var(--vb-surface, #f7f7f7); border-left: 0; }
.contact-eyebrow { margin: 0 0 9px; color: var(--vb-accent, #4e3fa5); font-size: 14px; font-weight: 600; }
h2 { margin: 0 0 10px; color: var(--vb-heading, #243b7b); font-size: 27px; font-weight: 600; line-height: 1.3; letter-spacing: -0.35px; }
p { margin: 0; color: #666666; font-size: 16px; line-height: 1.7; }
a { display: inline-flex; flex-shrink: 0; align-items: center; justify-content: space-between; gap: 24px; min-height: 46px; padding: 12px 20px; border: 1px solid var(--vb-accent, #4e3fa5); border-radius: var(--vb-radius-control, 6px); background: var(--vb-accent, #4e3fa5); color: #fff; font-size: 16px; font-weight: 600; text-decoration: none; }
a:hover { background: var(--vb-heading, #243b7b); border-color: var(--vb-heading, #243b7b); }
a:focus-visible { outline: 2px solid var(--vb-heading, #243b7b); outline-offset: 4px; }
@media (max-width: 767px) {
  .service-contact { flex-direction: column; align-items: flex-start; padding: 24px 20px; margin-top: 40px; gap: 24px; }
  h2 { font-size: 24px; }
}
</style>
