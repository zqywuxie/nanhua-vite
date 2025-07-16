<template>
  <div class="immune-repertoire-bg">
    <div class="main-content">
      <div class="section section-intro">
        <div class="section-title">
          <h1 class="main-gradient-title">Immune Repertoire</h1>
        </div>
        <div class="section-body intro-body split-row">
          <div class="split-img">
            <img :src="imgA" alt="Immune Repertoire" />
          </div>
          <div class="split-text highlight-bg">
            <p><span style="color:#003399;font-size:16px;"><strong>Immune Repertoire</strong></span> refers to the sum of all functionally diverse T cells and B cells in an individual at any given time. It represents an overview and historical record of a person's immune function.</p>
            <p>B cells account for about 20% of peripheral lymphocytes, and their main function is to produce antibodies that mediate humoral immune responses. The B cell receptor (BCR) is a membrane-bound immunoglobulin (SmIg) on B cells that recognizes antigens and has antigen-binding specificity. The main function of T cells is to mediate cellular immunity. The T cell receptor (TCR) is a molecular structure on T cells that specifically recognizes and binds to antigen peptide-MHC complexes.</p>
            <p>Studies have shown that the immune repertoire contains seven major chains: the α, β, γ, and δ chains of TCR, and the light chains <span style="color:#222222;font-size:14px;line-height:26px;text-indent:28px;white-space:normal;">(κ, λ)</span> and heavy chain of BCR. Each immune protein in the repertoire has very little structural difference from others, but there are many subtypes. This diversity plays a vital role in health.</p>
            <p>The immune repertoire contains seven major chains: the light chains <span style="color:#222222;font-size:14px;line-height:26px;text-indent:28px;white-space:normal;">(κ, λ)</span> and heavy chain of BCR, and the α, β, γ, and δ chains of TCR. Each immune protein in the repertoire has very little structural difference from others, but there are many subtypes. This diversity is crucial for health—the more subtypes of immune proteins, the more effective the resistance to pathogens; fewer subtypes mean higher susceptibility to disease.</p>
            <p>Factors such as age, environment, disease, and medication affect the diversity of the immune repertoire. Generally, the more subtypes of immune proteins, the stronger the immunity and the more effective the resistance to bacteria, viruses, and other pathogens, making the body less susceptible to disease. Therefore, research on the immune repertoire mainly focuses on monitoring, analyzing, and applying its diversity.</p>
          </div>
        </div>
      </div>
      
      <hr class="section-divider" />
      
      <div class="section section-diversity">
        <h2 class="main-gradient-title">The Basis of Immune Repertoire Diversity</h2>
        <div class="section-body split-row reverse-row">
          <div class="split-text highlight-bg">
            <p>The majority of TCRs are composed of α and β chains, while a minority of T cells have TCRs composed of γ and δ chains. Each chain can be divided into variable region (V region), constant region (C region), transmembrane region, and cytoplasmic region. The V regions (Vα, Vβ) of the α and β chains each have three hypervariable regions: CDR1, CDR2, and CDR3. Among these, CDR3 is the most variable and directly determines the antigen-binding specificity of the TCR. The CDR3 of TCR is encoded by the V, D, and J genes. During lymphocyte maturation, various recombined sequence fragments are formed through V, D, and J gene rearrangement, and further diversity is introduced by SNPs and Indels in DNA bases, resulting in T cell diversity.</p>
            <p>BCRs are composed of two heavy chains and two light chains. The heavy chain consists of a variable region (V region), constant region (C region), transmembrane region, and cytoplasmic region; the light chain has only V and C regions. The V region consists of VH and VL domains, each composed of three complementarity-determining regions (CDR1, CDR2, and CDR3). The amino acid composition and sequence of the CDRs are highly diverse. In a single individual, the BCR repertoire can reach 10<sup>9</sup> to 10<sup>12</sup>, providing a vast capacity for recognizing various antigens and generating specific antibodies. All three CDRs participate in antigen recognition and together determine the antigen specificity of the BCR.</p>
          </div>
          <div class="split-img">
            <img :src="imgB" alt="Diversity Basis" />
            <span class="img-caption">The diagram shows an antibody composed of heavy and light chains. The V region, which includes the framework (FR) and complementarity-determining regions (CDR), mainly determines its antigen-binding specificity.</span>
          </div>
        </div>
      </div>
      
      <hr class="section-divider" />
      
      <div class="section section-irseq">
        <h2 class="main-gradient-title">Immune Repertoire Sequencing</h2>
        <div class="section-body split-row">
          <div class="split-img">
            <img :src="imgC" alt="Immune Repertoire Sequencing" />
          </div>
          <div class="split-text highlight-bg">
            <p><span style="font-size:16px;color:#003399;"><strong>Immune Repertoire Sequencing (IR-SEQ)</strong></span> targets T/B lymphocytes, using multiplex PCR and other techniques to amplify the diversity of TCR/BCR complementarity-determining regions (CDRs), and combines high-throughput sequencing technology to analyze the diversity of the immune repertoire and the unique sequence composition and variation of each T and B cell clone. This provides a comprehensive and accurate description of the immune system status and further evaluates the relationship between immune system diversity and disease.</p>
            <p>With the continuous development and maturation of immune repertoire sequencing technology, significant progress has been made in biomarker discovery based on immune repertoire diversity, efficacy prediction for diseases such as cancer, disease susceptibility and resistance, infectious disease and vaccine research, and other areas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const imgA = '/src/assets/Background/a.jpg'
const imgB = '/src/assets/Background/b.jpg'
const imgC = '/src/assets/Background/RighInfo002225-img4.jpg'
</script>

<style scoped>
.immune-repertoire-bg {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 20px 0;
}
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px 60px 24px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(59,123,191,0.12);
  position: relative;
  overflow: hidden;
}

.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
}
.main-gradient-title {
  font-size: 2.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00bc97 0%, #4e3fa5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.section {
  margin-bottom: 40px;
  padding: 40px 32px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(59,123,191,0.08);
  transition: all 0.3s ease;
}

.section:hover {
  box-shadow: 0 8px 30px rgba(59,123,191,0.12);
  transform: translateY(-2px);
}

.section-divider {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #00bc97 20%, #4e3fa5 80%, transparent 100%);
  margin: 50px auto;
  width: 80%;
  max-width: 600px;
  border-radius: 1px;
}
.section-body.split-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}
.reverse-row {
  flex-direction: row-reverse;
}
.split-img {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
}
.split-img img {
  width: 100%;
  max-width: 520px;
  border: 2px solid rgba(0, 188, 151, 0.2);
  border-radius: 16px;
  box-shadow: 0 6px 24px rgba(59,123,191,0.15);
  transition: all 0.3s ease;
}

.split-img img:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 32px rgba(59,123,191,0.2);
  border-color: rgba(0, 188, 151, 0.4);
}
.img-caption {
  margin-top: 10px;
  color: #666;
  font-size: 0.98rem;
  text-align: center;
}
.split-text {
  flex: 1 1 0%;
  font-size: 1.08rem;
  color: #333;
}
.highlight-bg {
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(59,123,191,0.1);
  padding: 36px 32px;
  border: 1px solid rgba(0, 188, 151, 0.1);
  position: relative;
  overflow: hidden;
}

.highlight-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #00bc97 0%, #4e3fa5 100%);
}
@media (max-width: 900px) {
  .section-body.split-row,
  .reverse-row {
    flex-direction: column !important;
    gap: 24px;
  }
  .split-img img {
    max-width: 100%;
  }
  .highlight-bg {
    padding: 20px 10px;
  }
}
</style> 