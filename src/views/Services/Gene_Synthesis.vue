<template>
  <div class="gene-synthesis-page">
    <!-- Banner Section -->
    <div class="m2banner on">
      <div class="coverImg">
        <img src="/src/assets/services/Gen Syn.jpg" width="1920" height="663" alt="Gene Synthesis Service" />
      </div>
      <div class="m2banTxt">
        <div class="container">
          <div class="banner-title wow fadeInUp">
            <strong>Gene Synthesis Service</strong>
            <img class="banner-percent" src="/src/assets/promotions/50OFF.png" alt="50% off" />
          </div>
          <div class="banner-divider wow fadeInUp"></div>
          <p class="wow fadeInUp">Get 100% Accurate Synthetic Clonal DNA in 5 Days</p>
          <div class="m2banBtns wow fadeInUp">
            <a target="_blank" href="https://www.quintarabio.com/gene-synthesis/" class="wmore"><span>Order Now</span></a>
            <a href="javascript:;" class="wmore contactBtn" @click="showContactModal"><span>Contact Us</span></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu Section -->
    <div class="m2menuWpr wow fadeIn">
      <div class="container">
        <div class="m2menu">
          <a href="#part1" class="m2ma" @click="smoothScroll('#part1')">Overview</a>
          <a href="#part2" class="m2ma" @click="smoothScroll('#part2')">Workflow</a>
          <a href="#part3" class="m2ma" @click="smoothScroll('#part3')">Services</a>
          <a href="#part4" class="m2ma" @click="smoothScroll('#part4')">Resources</a>
        </div>
      </div>
    </div>
    <!-- Breadcrumb -->
    <div class="m2posWpr wow fadeInUp">
      <div class="container">
        <div class="m2pos">
          <a class="cor_666" href="/">Home</a>
          <span class="separator">></span>
          <a class="cor_666">Gene Synthesis</a>
          <span class="separator">></span>
          <a class="cor_666">DNA Writing</a>
          <span class="separator">></span>
          <span class="current">Gene Synthesis Service</span>
        </div>
      </div>
    </div>
    <!-- Overview Section -->
    <a class="posLink gen_link1" name="part1" id="part1"></a>
    <div class="pubCon coa_con1 gen_con1">
      <div class="container">
        <div class="inx_pt">
          <strong class="wow fadeInUp"><span>Overview</span></strong>
        </div>
        <div class="m2txt wow fadeInUp">
          <p>Quintara Biosciences offers precision-engineered gene synthesis services, thoughtfully tailored to your unique research requirements. With a strong emphasis on quality and efficiency, we prioritize your downstream applications to deliver exceptional results.</p>
          <p>Gene fragments up to 2 kb are synthesized in under one week, while clonal genes up to 20 kb are ready in less than two weeks. To ensure the highest level of accuracy, all clonal genes undergo rigorous sequence verification. Trust Quintara Biosciences for reliable, high-quality gene synthesis solutions that accelerate your scientific advancements.</p>
          <p><a href="https://store.quintarabio.com/user/register" target="_blank"><img src="/src/assets/services/oligo-register.png" /></a></p>
          <div class="promotion-section">
            <p class="promotion-title">50% off for new customers, Do not miss out!</p>
            <p class="promotion-offer">What We Offer: 50% off on Regular gene synthesis service for new customers</p>
            <p class="promotion-terms"><strong>Terms and Condition:</strong></p>
            <ul class="promotion-list">
              <li>The promotion is applied for the customers who never order Regular gene synthesis service in Quintara before</li>
              <li>The promotion is valid from July 1 to Sep 30, 2025</li>
              <li>The discount price is applied for Regular gene synthesis, and the mini charge is $35.</li>
              <li>Quintara reserves all rights to this promotion.</li>
            </ul>
          </div>
        </div>
        <ul class="coa_c1ul flexlst wow fadeInUp">
          <li>
            <span class="coa_c1ico">
              <img src="/src/assets/services/Strong emp.png" width="120" height="120" />
            </span>
            <p>With a strong emphasis on quality and efficiency</p>
          </li>
          <li>
            <span class="coa_c1ico">
              <img src="/src/assets/services/2 kb.png" width="120" height="120" />
            </span>
            <p>Gene fragments up to 2 kb are synthesized in under one week</p>
          </li>
          <li>
            <span class="coa_c1ico">
              <img src="/src/assets/services/20kb.png" width="120" height="120" />
            </span>
            <p>clonal genes up to 20 kb are ready in less than two weeks</p>
          </li>
          <li>
            <span class="coa_c1ico">
              <img src="/src/assets/services/highst level.png" width="120" height="120" />
            </span>
            <p>the highest level of accuracy</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Workflow Section -->
    <a class="posLink gen_link2" name="part2" id="part2"></a>
    <div class="pubCon cob_con2 gen_con2">
      <div class="container">
        <div class="coa_c2tip wow fadeInUp" data-wow-delay="0.1s">
          <div class="coa_c2tip-bg match-register-img-width" ref="customOrderBoxRef">
            <div class="custom-order-flex">
              <strong class="custom-order-title">Need help with a custom order?</strong>
              <span class="custom-order-dots"></span>
              <div class="coa_c2btn">
                <a href="javascript:;" class="wmore contactBtn" @click="scrollToContact"><span>CONTACT US</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="inx_pt">
          <strong class="wow fadeInUp"><span>Workflow</span></strong>
        </div>
        <div class="m2txt m2txt_c wow fadeInUp">
          <p>At Quintara Biosciences, our gene synthesis workflow is meticulously designed to deliver high-quality, sequence-verified clonal genes with rapid turnaround times.</p>
        </div>
        <dl class="coa_c3ul gen_c3ul flexlst wow fadeInUp">
          <dd>
            <div class="coa_c3item">
              <div class="workflow-step-num">01</div>
              <div class="gen_c3ico">
                <img src="/src/assets/services/Codon.png" width="100" height="100" />
              </div>
              <p>Codon Optimization if necessary</p>
            </div>
          </dd>
          <dd>
            <div class="coa_c3item">
              <div class="workflow-step-num">02</div>
              <div class="gen_c3ico">
                <img src="/src/assets/services/Primer.png" width="100" height="100" />
              </div>
              <p>Primer Design and Synthesis</p>
            </div>
          </dd>
          <dd>
            <div class="coa_c3item">
              <div class="workflow-step-num">03</div>
              <div class="gen_c3ico">
                <img src="/src/assets/services/Gene.png" width="100" height="100" />
              </div>
              <p>Gene Assembly</p>
            </div>
          </dd>
          <dd>
            <div class="coa_c3item">
              <div class="workflow-step-num">04</div>
              <div class="gen_c3ico">
                <img src="/src/assets/services/Clonal.png" width="100" height="100" />
              </div>
              <p>Clonal Gene: default pUC57, and 100+ expression vector</p>
            </div>
          </dd>
          <dd>
            <div class="coa_c3item">
              <div class="workflow-step-num">05</div>
              <div class="gen_c3ico">
                <img src="/src/assets/services/QC.png" width="100" height="100" />
              </div>
              <p>QC and Delivery</p>
            </div>
          </dd>
        </dl>
        <div class="gen_c3bmul wow fadeInUp adv-rect-bg">
          <ul class="flexlst gen-adv-list">
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Gene Fragment up to 2kb in less than 1 week</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Qblocks error rate ≤ 1 in 1 million</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Clonal genes up to 20kb in less than 2 weeks</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Synthesize complex genes, including high GC and repeats</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Clonal genes are sequence confirmed</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>Free sample delivered directly to local pickup boxes</li>
            <li><span class="check-circle"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill="url(#checkGradient)"/><polyline points="5,10 8,13 13,6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="0" height="0"><defs><linearGradient id="checkGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00e6b8"/><stop offset="100%" stop-color="#6c3fff"/></linearGradient></defs></svg></span>No minimum number of samples</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Services Section -->
    <a class="posLink gen_link3" name="part3" id="part3"></a>
    <div class="pubCon gen_con3">
      <div class="container">
        <div class="inx_pt">
          <strong class="wow fadeInUp"><span>Services</span></strong>
        </div>
        <ul class="coa_c5ul flexlst wow fadeInUp service-cards-2col-wide">
          <li class="service-card-2col-wide">
            <div class="service-card-2col-left">
              <div class="service-card-title">Regular Gene <br />Synthesis</div>
              <div class="service-card-divider-svg">
                <svg viewBox="0 0 400 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="dottedGradient" x1="0" y1="5" x2="400" y2="5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00e6b8"/>
                      <stop offset="1" stop-color="#6c3fff"/>
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="5" r="2" fill="url(#dottedGradient)"/>
                  <circle cx="40" cy="5" r="2.2" fill="url(#dottedGradient)"/>
                  <circle cx="68" cy="5" r="2.4" fill="url(#dottedGradient)"/>
                  <circle cx="96" cy="5" r="2.6" fill="url(#dottedGradient)"/>
                  <circle cx="124" cy="5" r="2.8" fill="url(#dottedGradient)"/>
                  <circle cx="152" cy="5" r="3" fill="url(#dottedGradient)"/>
                  <circle cx="180" cy="5" r="3.2" fill="url(#dottedGradient)"/>
                  <circle cx="208" cy="5" r="3.4" fill="url(#dottedGradient)"/>
                  <circle cx="236" cy="5" r="3.6" fill="url(#dottedGradient)"/>
                  <circle cx="264" cy="5" r="3.8" fill="url(#dottedGradient)"/>
                  <circle cx="292" cy="5" r="4" fill="url(#dottedGradient)"/>
                  <circle cx="320" cy="5" r="3.8" fill="url(#dottedGradient)"/>
                  <circle cx="348" cy="5" r="3.6" fill="url(#dottedGradient)"/>
                  <circle cx="376" cy="5" r="3.4" fill="url(#dottedGradient)"/>
                </svg>
              </div>
              <div class="service-card-desc">Clonal Gene in 9 Business Days</div>
            </div>
            <div class="service-card-2col-right">
              <div class="service-card-img-circle-wide">
                <img src="/src/assets/services/Regular_Gene.png" alt="Regular Gene" />
              </div>
            </div>
          </li>
          <li class="service-card-2col-wide">
            <div class="service-card-2col-left">
              <div class="service-card-title">QuinUP™ Gene Synthesis</div>
              <div class="service-card-divider-svg">
                <svg viewBox="0 0 400 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="dottedGradient2" x1="0" y1="5" x2="400" y2="5" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00e6b8"/>
                      <stop offset="1" stop-color="#6c3fff"/>
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="5" r="2" fill="url(#dottedGradient2)"/>
                  <circle cx="40" cy="5" r="2.2" fill="url(#dottedGradient2)"/>
                  <circle cx="68" cy="5" r="2.4" fill="url(#dottedGradient2)"/>
                  <circle cx="96" cy="5" r="2.6" fill="url(#dottedGradient2)"/>
                  <circle cx="124" cy="5" r="2.8" fill="url(#dottedGradient2)"/>
                  <circle cx="152" cy="5" r="3" fill="url(#dottedGradient2)"/>
                  <circle cx="180" cy="5" r="3.2" fill="url(#dottedGradient2)"/>
                  <circle cx="208" cy="5" r="3.4" fill="url(#dottedGradient2)"/>
                  <circle cx="236" cy="5" r="3.6" fill="url(#dottedGradient2)"/>
                  <circle cx="264" cy="5" r="3.8" fill="url(#dottedGradient2)"/>
                  <circle cx="292" cy="5" r="4" fill="url(#dottedGradient2)"/>
                  <circle cx="320" cy="5" r="3.8" fill="url(#dottedGradient2)"/>
                  <circle cx="348" cy="5" r="3.6" fill="url(#dottedGradient2)"/>
                  <circle cx="376" cy="5" r="3.4" fill="url(#dottedGradient2)"/>
                </svg>
              </div>
              <div class="service-card-desc">Clonal Gene in 5 Business Days</div>
            </div>
            <div class="service-card-2col-right">
              <div class="service-card-img-circle-wide">
                <img src="/src/assets/services/QuinUp.png" alt="QuinUP" />
              </div>
            </div>
          </li>
        </ul>
        <div class="gen_ncon3table wow fadeInUp">
          <div class="gen_nc3table">
            <table width="100%" border="0">
              <tr class="firstRow">
                <td width="20%">&nbsp;</td>
                <td width="40%">Length</td>
                <td width="40%">Turnaround<br /><span style="font-size: 12px;"><em>business day</em></span></td>
              </tr>
              <tr>
                <td rowspan="9">Regular</td>
                <td>&lt;500 bp</td>
                <td>5~8</td>
              </tr>
              <tr><td>500~1,500 bp</td><td>8~10</td></tr>
              <tr><td>1,501~3,000 bp</td><td>10~14</td></tr>
              <tr><td>3,001~5,000 bp</td><td>16~24</td></tr>
              <tr><td>5,000~8,000bp</td><td>25~34</td></tr>
              <tr><td>8,000~10,000bp</td><td>35~40</td></tr>
              <tr><td>10,000~15,000bp</td><td>40~50</td></tr>
              <tr><td>15,000~30,000bp</td><td>50~60</td></tr>
              <tr><td>30,000~50,000bp</td><td>60~70</td></tr>
              <tr>
                <td colspan="3">Default vector: <img src="/src/assets/ui/Resources_file.png" /> <a href="https://www.quintarabio.com/upload/attachment/202506/16/102741/PUC57_BsaI_Free_QB.pdf" target="_blank" style="font-size: 12px; color: #0066cc;">PUC57_BsaI_Free_QB.pdf</a></td>
              </tr>
            </table>
          </div>
          <div class="gen_nc3table">
            <table width="100%" border="0">
              <tr class="firstRow">
                <td width="20%">&nbsp;</td>
                <td width="40%">Length</td>
                <td width="40%">Turnaround<br /><span style="font-size: 12px;"><em>business day</em></span></td>
              </tr>
              <tr>
                <td rowspan="2">QuinUP<sup>TM</sup></td>
                <td>≤800bp</td>
                <td>5</td>
              </tr>
              <tr><td>801-1,500 bp</td><td>5</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Resources Section 分隔线 -->
    <div class="hr-divider"></div>
    <!-- Resources Section -->
    <a class="posLink gen_link4" name="part4" id="part4"></a>
    <div class="pubCon coa_con6">
      <div class="container">
        <div class="inx_pt">
          <strong class="wow fadeInUp"><span>Resources</span></strong>
        </div>
        <div class="resource-cards-new">
          <div class="resource-card-new">
            <div class="resource-card-img-wrap">
              <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="Quote Form" />
            </div>
            <div class="resource-card-content">
              <div class="resource-card-title">Quintara Oligo Quote Form</div>
              <a class="resource-card-link" href="/upload/attachment/202504/23/101726/Quintara Quote Form Oligo.xlsx" target="_blank">Download</a>
            </div>
          </div>
          <div class="resource-card-new">
            <div class="resource-card-img-wrap">
              <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="User Guide" />
            </div>
            <div class="resource-card-content">
              <div class="resource-card-title">Quintara Oligo User Guide</div>
              <a class="resource-card-link" href="/upload/attachment/202504/22/071949/Quintara-User Guide-Oligo.docx" target="_blank">Download</a>
            </div>
          </div>
          <div class="resource-card-new">
            <div class="resource-card-img-wrap">
              <img class="resource-card-img" src="/src/assets/ui/Resources_file.png" alt="Nanopore Sequencing" />
            </div>
            <div class="resource-card-content">
              <div class="resource-card-title">Nanopore Sequencing</div>
              <a class="resource-card-link" href="/upload/attachment/202505/21/074314/PlasmidExpress Nanopore_Quintara_2025.pdf" target="_blank">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Explore Other Solutions Section -->
    <div class="explore-bg">
      <div class="pubCon coa_con7">
        <div class="container">
          <div class="inx_pt">
            <strong class="wow fadeInUp"><span>Explore Other Solutions</span></strong>
          </div>
          <dl class="coa_c7dls flexlst wow fadeInUp">
            <dd>
              <a href="https://www.quintarabio.com/oligo-synthesis/" class="coa_c7item scaleImg">
                <div class="overflowHide">
                  <div class="coverImg">
                    <img src="/src/assets/services/Oligo Syn.jpg" width="466" height="251" />
                  </div>
                </div>
                <div class="coa_c7bm">
                  <strong class="elis">Oligo Synthesis</strong>
                  <div class="card-dotted-divider-svg">
                    <svg viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:10px;">
                      <defs>
                        <linearGradient id="dottedGradientOligo" x1="0" y1="5" x2="180" y2="5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00e6b8"/>
                          <stop offset="1" stop-color="#6c3fff"/>
                        </linearGradient>
                      </defs>
                      <circle cx="8" cy="5" r="1.6" fill="url(#dottedGradientOligo)"/>
                      <circle cx="22" cy="5" r="1.8" fill="url(#dottedGradientOligo)"/>
                      <circle cx="36" cy="5" r="2" fill="url(#dottedGradientOligo)"/>
                      <circle cx="50" cy="5" r="2.2" fill="url(#dottedGradientOligo)"/>
                      <circle cx="64" cy="5" r="2.4" fill="url(#dottedGradientOligo)"/>
                      <circle cx="78" cy="5" r="2.6" fill="url(#dottedGradientOligo)"/>
                      <circle cx="92" cy="5" r="2.8" fill="url(#dottedGradientOligo)"/>
                      <circle cx="106" cy="5" r="3" fill="url(#dottedGradientOligo)"/>
                      <circle cx="120" cy="5" r="3.2" fill="url(#dottedGradientOligo)"/>
                      <circle cx="134" cy="5" r="3.4" fill="url(#dottedGradientOligo)"/>
                      <circle cx="148" cy="5" r="3.6" fill="url(#dottedGradientOligo)"/>
                      <circle cx="162" cy="5" r="3.8" fill="url(#dottedGradientOligo)"/>
                    </svg>
                  </div>
                  <p class="elis">Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="discover-more">Discover more <span class="arrow">&gt;</span></span>
                </div>
              </a>
            </dd>
            <dd>
              <a href="https://www.quintarabio.com/custom-cloning/" class="coa_c7item scaleImg">
                <div class="overflowHide">
                  <div class="coverImg">
                    <img src="/src/assets/services/Custom Clon.jpg" width="466" height="251" />
                  </div>
                </div>
                <div class="coa_c7bm">
                  <strong class="elis">Custom Cloning</strong>
                  <div class="card-dotted-divider-svg">
                    <svg viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:10px;">
                      <defs>
                        <linearGradient id="dottedGradientCloning" x1="0" y1="5" x2="180" y2="5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00e6b8"/>
                          <stop offset="1" stop-color="#6c3fff"/>
                        </linearGradient>
                      </defs>
                      <circle cx="8" cy="5" r="1.6" fill="url(#dottedGradientCloning)"/>
                      <circle cx="22" cy="5" r="1.8" fill="url(#dottedGradientCloning)"/>
                      <circle cx="36" cy="5" r="2" fill="url(#dottedGradientCloning)"/>
                      <circle cx="50" cy="5" r="2.2" fill="url(#dottedGradientCloning)"/>
                      <circle cx="64" cy="5" r="2.4" fill="url(#dottedGradientCloning)"/>
                      <circle cx="78" cy="5" r="2.6" fill="url(#dottedGradientCloning)"/>
                      <circle cx="92" cy="5" r="2.8" fill="url(#dottedGradientCloning)"/>
                      <circle cx="106" cy="5" r="3" fill="url(#dottedGradientCloning)"/>
                      <circle cx="120" cy="5" r="3.2" fill="url(#dottedGradientCloning)"/>
                      <circle cx="134" cy="5" r="3.4" fill="url(#dottedGradientCloning)"/>
                      <circle cx="148" cy="5" r="3.6" fill="url(#dottedGradientCloning)"/>
                      <circle cx="162" cy="5" r="3.8" fill="url(#dottedGradientCloning)"/>
                    </svg>
                  </div>
                  <p class="elis">Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="discover-more">Discover more <span class="arrow">&gt;</span></span>
                </div>
              </a>
            </dd>
            <dd>
              <a href="https://www.quintarabio.com/plasmid-dna-preparation/" class="coa_c7item scaleImg">
                <div class="overflowHide">
                  <div class="coverImg">
                    <img src="/src/assets/services/Plasmid.jpg" width="466" height="251" />
                  </div>
                </div>
                <div class="coa_c7bm">
                  <strong class="elis">Plasmid Preparation</strong>
                  <div class="card-dotted-divider-svg">
                    <svg viewBox="0 0 180 10" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:10px;">
                      <defs>
                        <linearGradient id="dottedGradientPlasmid" x1="0" y1="5" x2="180" y2="5" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#00e6b8"/>
                          <stop offset="1" stop-color="#6c3fff"/>
                        </linearGradient>
                      </defs>
                      <circle cx="8" cy="5" r="1.6" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="22" cy="5" r="1.8" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="36" cy="5" r="2" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="50" cy="5" r="2.2" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="64" cy="5" r="2.4" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="78" cy="5" r="2.6" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="92" cy="5" r="2.8" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="106" cy="5" r="3" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="120" cy="5" r="3.2" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="134" cy="5" r="3.4" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="148" cy="5" r="3.6" fill="url(#dottedGradientPlasmid)"/>
                      <circle cx="162" cy="5" r="3.8" fill="url(#dottedGradientPlasmid)"/>
                    </svg>
                  </div>
                  <p class="elis">Quintara Biosciences offers rapid, cost-effective, full range of genomics services, including DNA</p>
                  <span class="discover-more">Discover more <span class="arrow">&gt;</span></span>
                </div>
              </a>
            </dd>
          </dl>

        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <div class="contactLay contactLayer" :class="{ dsNone: !showContact }">
      <i class="con_close" @click="hideContactModal"></i>
      <div class="con_t"><span>Contact Us</span></div>
      <ul class="con_form">
        <li><input placeholder="*First Name:" v-model="contactForm.firstName" type="text" /></li>
        <li><input placeholder="*Last Name:" v-model="contactForm.lastName" type="text" /></li>
        <li class="con_w100"><input placeholder="*Email:" v-model="contactForm.email" type="text" /></li>
        <li class="con_w100"><input placeholder="*Company/Institution:" v-model="contactForm.company" type="text" /></li>
        <li class="con_w100"><textarea placeholder="*Message:" v-model="contactForm.message" cols="" rows=""></textarea></li>
      </ul>
      <div class="con_btns">
        <button @click="submitContactForm" class="pub_more pub_more_lg transition"><span><i>SUBMIT</i></span></button>
      </div>
    </div>

    <!-- 页面底部复用两个模块 -->
    <div class="pubCon">
      <div class="container">
        <PlasmidExpressBanner />
      </div>
    </div>
    <WeGoFastFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import PlasmidExpressBanner from '/src/components/PlasmidExpressBanner.vue'
import WeGoFastFooter from '/src/components/WeGoFastFooter.vue'

// Contact form data
const showContact = ref(false)
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: ''
})

// Refs for custom order box
const customOrderBoxRef = ref(null)

// Methods
const showContactModal = () => {
  showContact.value = true
  document.body.style.overflow = 'hidden'
}

const hideContactModal = () => {
  showContact.value = false
  document.body.style.overflow = 'auto'
}

const smoothScroll = (target) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToContact = () => {
  showContactModal()
}

const submitContactForm = () => {
  // Validate form
  if (!contactForm.value.firstName) {
    alert('Please fill in your First name')
    return
  }
  if (!contactForm.value.lastName) {
    alert('Please fill in your Last name')
    return
  }
  if (!contactForm.value.company) {
    alert('Please fill in your Company/Institution')
    return
  }
  if (!contactForm.value.email) {
    alert('Please fill in your email')
    return
  }
  if (!contactForm.value.message) {
    alert('Please fill in your message')
    return
  }

  // Here you would typically send the form data to your backend
  console.log('Contact form submitted:', contactForm.value)
  alert('Submitted successfully')
  
  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  }
  
  hideContactModal()
}

// Animation observer
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.visibility = 'visible'
        entry.target.style.animationName = entry.target.classList.contains('fadeInUp') ? 'fadeInUp' : 'fadeIn'
      }
    })
  }, observerOptions)

  // Observe all elements with wow classes
  document.querySelectorAll('.wow').forEach(el => {
    el.style.visibility = 'hidden'
    observer.observe(el)
  })

  // Set custom order box height to match register image
  nextTick(() => {
    const registerImg = document.querySelector('.m2txt img')
    if (registerImg && customOrderBoxRef.value) {
      const imgHeight = registerImg.offsetHeight
      customOrderBoxRef.value.style.height = imgHeight + 'px'
    }
  })
})
</script>

<style scoped>
.gene-synthesis-page {
  background: #fff;
  min-height: 100vh;
}

/* Banner Styles */
.m2banner {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.m2banner .coverImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.m2banner .coverImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.m2banTxt {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
  color: white;
  text-align: left;
}

.m2banTxt .container {
  max-width: 2000px;
  padding: 0 80px;
  margin-left: 0;
}

.banner-title {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 25px;
}

.banner-title strong {
  font-size: 72px;
  font-weight: bold;
  line-height: 1.1;
  color: white;
}

.banner-percent {
  height: 80px;
  width: auto;
}

.banner-divider {
  width: 250px;
  height: 3px;
  background: repeating-linear-gradient(
    to right,
    white 0,
    white 10px,
    transparent 10px,
    transparent 20px
  );
  margin-bottom: 30px;
}

  .m2banTxt p {
    font-size: 28px;
    margin-bottom: 40px;
    line-height: 1.3;
    color: white;
  }
  
  .inx_pt strong {
    font-size: 40px;
  }
  
  .m2txt {
    font-size: 18px;
  }
  
  .promotion-section {
    margin: 20px 0;
  padding: 20px;
  }
  
  .promotion-title {
    font-size: 24px;
    margin-bottom: 12px;
  }
  
  .promotion-offer {
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  .promotion-terms {
    font-size: 18px;
    margin-bottom: 12px;
  }
  
  .promotion-list li {
    font-size: 16px;
    margin-bottom: 6px;
  }

.m2banBtns {
  display: flex;
  gap: 25px;
  justify-content: flex-start;
}

.m2banBtns .wmore {
  display: inline-block;
  padding: 18px 40px;
  background: transparent;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.m2banBtns .wmore:hover {
  background: white;
  color: #2a3b77;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255,255,255,0.3);
}

/* Menu Styles */
.m2menuWpr {
  background: #4a5b97;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.m2menuWpr .container {
  max-width: 2000px;
  padding: 0 80px;
  margin-left: 0;
}

.m2menu {
  display: flex;
  justify-content: flex-start;
  gap: 60px;
}

.m2ma {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 18px;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
}

.m2ma:hover {
  color: #ffd700;
  border-bottom-color: #ffd700;
  font-weight: 600;
}

/* Breadcrumb */
.m2posWpr {
  padding: 20px 0;
  background: white;
}

.m2posWpr .container {
  max-width: 2000px;
  padding: 0 80px;
  margin-left: 0;
}

.m2pos {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}

.m2pos a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.m2pos a:hover {
  color: #2a3b77;
}

.cor_666 {
  color: #666;
}

.separator {
  color: #999;
  margin: 0 5px;
  font-weight: 500;
}

.current {
  color: #2a3b77;
  font-weight: 600;
}

/* Container */
.container {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 30px;
}

/* Section Styles */
.pubCon {
  padding: 40px 0 100px 0;
}

.inx_pt {
  text-align: center;
  margin-bottom: 30px;
}

.inx_pt strong {
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(135deg, #4CAF50, #9C27B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.m2txt {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 50px;
}

.promotion-section {
  margin: 30px 0;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #4CAF50;
}

.promotion-title {
  font-size: 28px;
  color: #2a3b77;
  font-weight: bold;
  margin-bottom: 15px;
  line-height: 1.3;
}

.promotion-offer {
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.4;
}

.promotion-terms {
  font-size: 20px;
  color: #2a3b77;
  font-weight: bold;
  margin-bottom: 15px;
}

.promotion-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.promotion-list li {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  line-height: 1.5;
}

.promotion-list li:before {
  content: "•";
  color: #4CAF50;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 0;
}

/* Feature List */
.coa_c1ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  list-style: none;
  padding: 0;
}

.coa_c1ul li {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.coa_c1ul li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.coa_c1ico {
  display: block;
  margin-bottom: 25px;
}

.coa_c1ico img {
  border-radius: 15px;
  transition: transform 0.6s ease;
}

.coa_c1ul li:hover .coa_c1ico img {
  transform: rotateY(180deg);
}

/* Workflow */
.coa_c2tip {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 0 0;
  margin-bottom: 48px;
}
.coa_c2tip-bg {
  width: 100%;
  max-width: 100%;
  min-height: 120px;
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 48px;
  box-sizing: border-box;
}
.custom-order-flex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 0;
}
.custom-order-title {
  font-size: 2.1em;
  color: #fff;
  font-weight: 900;
  margin-right: 48px;
  letter-spacing: 1px;
  white-space: nowrap;
  text-align: left;
}
.custom-order-dots {
  display: inline-block;
  flex: 1 1 auto;
  height: 0;
  margin-right: 48px;
  position: relative;
  min-width: 120px;
  max-width: 600px;
}
.custom-order-dots::before {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  border-bottom: 0;
  position: absolute;
  left: 0;
  top: 50%;
  pointer-events: none;
  /* 用SVG渐变点虚线 */
  background: url('data:image/svg+xml;utf8,<svg width="300" height="8" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="2" fill="white"/><circle cx="20" cy="4" r="2.2" fill="white"/><circle cx="36" cy="4" r="2.4" fill="white"/><circle cx="52" cy="4" r="2.6" fill="white"/><circle cx="68" cy="4" r="2.8" fill="white"/><circle cx="84" cy="4" r="3" fill="white"/><circle cx="100" cy="4" r="3.2" fill="white"/><circle cx="116" cy="4" r="3.4" fill="white"/><circle cx="132" cy="4" r="3.6" fill="white"/><circle cx="148" cy="4" r="3.8" fill="white"/><circle cx="164" cy="4" r="4" fill="white"/><circle cx="180" cy="4" r="4.2" fill="white"/><circle cx="196" cy="4" r="4.4" fill="white"/><circle cx="212" cy="4" r="4.6" fill="white"/><circle cx="228" cy="4" r="4.8" fill="white"/><circle cx="244" cy="4" r="5" fill="white"/><circle cx="260" cy="4" r="5.2" fill="white"/><circle cx="276" cy="4" r="5.4" fill="white"/></svg>') repeat-x left center;
  background-size: contain;
  height: 8px;
}
.coa_c2btn .wmore {
  display: inline-block;
  background: #fff;
  color: #2b7bbf;
  border-radius: 24px;
  padding: 0 40px;
  height: 48px;
  line-height: 48px;
  font-size: 1.2em;
  font-weight: 700;
  border: none;
  transition: box-shadow 0.2s, background 0.2s, color 0.2s;
  cursor: pointer;
  text-decoration: none;
}
.coa_c2btn .wmore span {
  display: inline-block;
}
.coa_c2btn .wmore:hover {
  background: #2b7bbf;
  color: #fff;
  box-shadow: 0 4px 16px #00bc9740;
}
.match-register-img-width {
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.gen_c3ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  list-style: none;
  padding: 0;
}

.coa_c3item {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 12px #2b7bbf10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 38px 20px 20px 20px;
  margin: 0 auto;
  transition: box-shadow 0.25s, transform 0.25s;
}

.coa_c3item:hover {
  box-shadow: 0 8px 32px #00bc9740;
  transform: translateY(-8px) scale(1.04);
}

.coa_c3item .workflow-step-num {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00e6b8 0%, #6c3fff 100%);
  color: #fff;
  font-size: 1.6em;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #00bc9720;
  z-index: 2;
  letter-spacing: 0.02em;
}

.coa_c3item .gen_c3ico {
  margin-top: 12px;
  margin-bottom: 16px;
}

.coa_c3item p {
  color: #111;
  font-weight: 700;
  font-size: 1em;
  margin: 0;
  text-align: center;
  letter-spacing: 0.02em;
}

.gen_c3bmul wow fadeInUp {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.gen_c3bmul li {
  background: #f8f9fa;
  padding: 20px 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.gen_c3bmul li:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

/* Services */
.coa_c5ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 50px;
  list-style: none;
  padding: 0;
  margin-bottom: 60px;
}

.coa_c5ul li {
  text-align: center;
  padding: 40px 30px;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.coa_c5ul li:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.coa_c5ico {
  margin-bottom: 25px;
}

.coa_c5ico img {
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.coa_c5ul li:hover .coa_c5ico img {
  transform: scale(1.1);
}

.coa_c5ul h4 {
  font-size: 28px;
  color: #2a3b77;
  margin-bottom: 20px;
}

.coa_c5txt1 {
  color: #666;
  font-size: 18px;
}

/* Tables */
.gen_ncon3table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
}

.gen_nc3table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.gen_nc3table .firstRow {
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%) !important;
}

.gen_nc3table .firstRow td {
  background: transparent !important;
  color: #fff !important;
  font-size: 1.28em;
  font-weight: 900;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #fff;
  text-align: center;
}

.gen_nc3table td {
  font-size: 1.18em;
  padding: 10px 12px;
  height: 38px;
  text-align: center;
}

.gen_nc3table tr:nth-child(even) td {
  background: rgb(245,248,253);
}

.gen_nc3table tr:nth-child(odd) td {
  background: #fff;
}

/* Resources */
.coa_c6ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  list-style: none;
  padding: 0;
}

.coa_c6item {
  display: block;
  padding: 40px 30px;
  background: #f8f9fa;
  border-radius: 15px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.coa_c6item:hover {
  background: #e9ecef;
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.coa_c6ico {
  display: block;
  margin-bottom: 25px;
}

.pub_more {
  display: inline-block;
  padding: 12px 25px;
  background: #2a3b77;
  color: white;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.pub_more:hover {
  background: #1a2b67;
  transform: translateY(-2px);
}

/* Explore Solutions */
.coa_c7dls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
  list-style: none;
  padding: 0;
  margin-bottom: 60px;
}

.coa_c7item {
  display: block;
  text-decoration: none;
  color: #333;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.coa_c7item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.overflowHide {
  overflow: hidden;
}

.coverImg img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.coa_c7item:hover .coverImg img {
  transform: scale(1.1);
}

.coa_c7bm {
  padding: 30px;
  background: white;
}

.coa_c7bm strong {
  font-size: 24px;
  color: #2a3b77;
  display: block;
  margin-bottom: 15px;
}

.coa_c7bm p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.card-dotted-divider-svg {
  margin: 16px 0 18px 0;
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
}

.discover-more {
  color: #888;
  font-weight: 500;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
}

.discover-more .arrow {
  font-size: 1.1em;
  font-weight: bold;
  margin-left: 2px;
}

/* Contact Modal */
.contactLay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.contactLay.dsNone {
  display: none;
}

.contactLay > div {
  background: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.con_close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.con_t {
  text-align: center;
  margin-bottom: 30px;
}

.con_t span {
  font-size: 24px;
  font-weight: bold;
  color: #2a3b77;
}

.con_form {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.con_form li {
  margin-bottom: 20px;
}

.con_form input,
.con_form textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.con_form textarea {
  height: 100px;
  resize: vertical;
}

.con_btns {
  text-align: center;
}

.pub_more_lg {
  padding: 15px 40px;
  font-size: 16px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.wow {
  animation-duration: 1s;
  animation-fill-mode: both;
}

/* Responsive */
@media (max-width: 768px) {
  .m2banTxt .container {
    padding: 0 40px;
  }
  
  .m2menuWpr .container {
    padding: 0 40px;
  }
  
  .m2posWpr .container {
    padding: 0 40px;
  }
  
  .banner-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  
  .banner-title strong {
    font-size: 56px;
  }
  
  .banner-percent {
    height: 60px;
  }
  
  .banner-divider {
    width: 200px;
  }
  
  .m2banTxt p {
    font-size: 28px;
  }
  
  .m2banBtns .wmore {
    padding: 15px 30px;
    font-size: 16px;
  }
  
  .m2menu {
    flex-wrap: wrap;
    gap: 35px;
  }
  
  .m2ma {
    padding: 6px 0;
    font-size: 16px;
  }
  
  .m2banBtns {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .m2menu {
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .pubCon {
    padding: 20px 0 60px 0;
  }
  
  .inx_pt {
    margin-bottom: 20px;
  }
  
  .coa_c1ul,
  .gen_c3ul,
  .coa_c5ul,
  .coa_c6ul,
  .coa_c7dls {
    grid-template-columns: 1fr;
  }
  
  .gen_ncon3table {
    grid-template-columns: 1fr;
  }
  
  .gen_nc3table {
    overflow-x: auto;
  }
}

.gen_con2 {
  background: rgb(241,241,241);
}

.m2txt_c {
  text-align: center;
}

.coa_c3ul.flexlst {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}
.coa_c3ul.flexlst dd {
  flex: 1 1 240px;
  max-width: 260px;
  display: flex;
  justify-content: center;
}
.coa_c3item {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 12px #2b7bbf10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 38px 20px 20px 20px;
  margin: 0 auto;
  transition: box-shadow 0.25s, transform 0.25s;
}
.coa_c3item:hover {
  box-shadow: 0 8px 32px #00bc9740;
  transform: translateY(-8px) scale(1.04);
}
.coa_c3item .workflow-step-num {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00e6b8 0%, #6c3fff 100%);
  color: #fff;
  font-size: 1.6em;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #00bc9720;
  z-index: 2;
  letter-spacing: 0.02em;
}
.coa_c3item .gen_c3ico {
  margin-top: 12px;
  margin-bottom: 16px;
}
.coa_c3item p {
  color: #111;
  font-weight: 700;
  font-size: 1em;
  margin: 0;
  text-align: center;
  letter-spacing: 0.02em;
}

/* 优化优势列表样式 */
.gen-adv-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 48px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.gen-adv-list li {
  display: flex;
  align-items: flex-start;
  font-size: 1.08em;
  color: #333;
  font-weight: 500;
  line-height: 1.7;
  margin: 0;
  padding: 0 0 0 0;
  background: none;
  border-radius: 0;
  box-shadow: none;
}
.check-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  margin-right: 14px;
  margin-top: 2px;
}

.adv-rect-bg {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(59,123,191,0.08);
  padding: 38px 48px 32px 48px;
  margin: 32px auto 0 auto;
  max-width: 1200px;
}

.service-cards-2col-wide {
  display: flex;
  flex-direction: row;
  gap: 48px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto 60px auto;
  padding: 0;
}
.service-card-2col-wide {
  flex: 1 1 0;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(241,241,241);
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(59,123,191,0.08);
  padding: 48px 64px 48px 64px;
  width: 100%;
  min-height: 220px;
  transition: box-shadow 0.2s;
  justify-content: space-between;
}
.service-card-2col-left {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
  height: 100%;
  width: 100%;
  padding-right: 32px;
}
.service-card-title {
  font-size: 2.2em;
  font-weight: 900;
  color: #111;
  margin-bottom: 12px;
  line-height: 1.2;
  text-align: left;
  width: 100%;
}
.service-card-divider-svg {
  margin-bottom: 18px;
  width: 100%;
  height: 10px;
}
.service-card-divider-svg svg {
  width: 100%;
  height: 10px;
  display: block;
}
.service-card-desc {
  font-size: 1.08em;
  color: #888;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: auto;
  align-self: flex-start;
}
.service-card-2col-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 48px;
}
.service-card-img-circle-wide {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #2b7bbf10;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.service-card-img-circle-wide img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
  transition: transform 0.7s cubic-bezier(.4,2,.6,1);
  display: block;
}
.service-card-img-circle-wide:hover img {
  transform: rotateY(180deg);
}
@media (max-width: 1200px) {
  .service-cards-2col-wide {
    flex-direction: column;
    gap: 36px;
  }
  .service-card-2col-wide {
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 18px 32px 18px;
  }
  .service-card-2col-right {
    margin-left: 0;
    margin-top: 24px;
  }
  .service-card-img-circle-wide {
    width: 120px;
    height: 120px;
  }
}

.hr-divider {
  width: 100%;
  height: 2px;
  background: #e0e6ef;
  border-radius: 2px;
  margin: 0 auto 36px auto;
}

.resource-cards-new {
  display: flex;
  gap: 32px;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
}
.resource-card-new {
  flex: 0 0 400px;
  max-width: 400px;
  background: #f2f3f7;
  border-radius: 16px;
  box-shadow: 0 2px 8px #2b7bbf10;
  padding: 24px 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 160px;
  transition: background 0.25s, color 0.25s;
}
.resource-card-img-wrap {
  flex: 0 0 120px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px #00bc9720;
}
.resource-card-img {
  width: 72px;
  height: 72px;
  border-radius: 0;
  background: #fff;
  object-fit: contain;
  box-shadow: 0 2px 12px #00bc9720;
  margin-right: 0;
  transition: transform 1s cubic-bezier(.4,2,.6,1);
}
.resource-card-new:hover {
  background: linear-gradient(90deg, #00e6b8 0%, #6c3fff 100%);
  color: #fff;
}
.resource-card-new:hover .resource-card-title, .resource-card-new:hover .resource-card-link {
  color: #fff;
}
.resource-card-new:hover .resource-card-img {
  transform: rotateY(360deg) rotateX(360deg);
}
.resource-card-new:hover .resource-card-link {
  background: #fff;
  color: #00e6b8;
  border: none;
}
.resource-card-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.resource-card-title {
  font-size: 1.18em;
  font-weight: 700;
  margin-bottom: 4px;
  color: #333;
  transition: color 0.25s;
}
.resource-card-link {
  color: #333;
  font-weight: 700;
  font-size: 1.08em;
  margin-top: 10px;
  text-decoration: none;
  background: #e4ecf2;
  border-radius: 999px;
  padding: 0 32px;
  height: 38px;
  line-height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 8px #00bc9720;
  transition: background 0.25s, color 0.25s;
  cursor: pointer;
}

/* Add background for Explore Other Solutions and after Resources */
.explore-bg {
  background: rgb(232,232,232);
  width: 100%;
}
</style> 
