<template>
    <div class="products-container">
        <div class="products-menu">
            <div class="products-menu-group">
                <div class="products-menu-title">Instruments</div>
                <ul class="products-submenu">
                    <li class="products-submenu-item" @click="$router.push('/instruments')">全自动NGS文库建库系统</li>
                    <li class="products-submenu-item" @click="$router.push('/instruments')">免疫组建库试剂</li>
                    <li class="products-submenu-item" @click="$router.push('/instruments')">宏基因组</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.products-menu-group {
  margin-bottom: 24px;
}
.products-menu-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #4e3fa5;
}
.products-submenu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.products-submenu-item {
  padding: 8px 0 8px 18px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;
}
.products-submenu-item:hover {
  color: #00bc97;
}
</style>