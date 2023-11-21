<template>
  <Layout>
    <PageContainer>
      <PageHeader>
        <template #title>關於WhyShop</template>
      </PageHeader>
      <main class="mb-10">
        <section class="grid grid-cols-12 p-5">
          <div class="col-span-12 my-3 md:my-0 md:col-span-1">
            <h2
              class="flex justify-start text-2xl italic md:justify-end rotate-0 translate-y-0 md:-rotate-90 md:translate-y-[300%] titleText whitespace-nowrap"
            >
              Why i need Lalafell
            </h2>
          </div>

          <div class="col-span-12 md:col-span-4">
            <img src="https://source.unsplash.com/NXiIVnzBwZ8" class="object-cover w-full h-full" />
          </div>

          <div class="col-span-12 p-6 space-y-3 md:col-span-7">
            <div class="prose prose-base max-w-none">
              <p class="text-lg text">
                意味著由每個季節所帶來不同風味的新鮮水果，結合各式甜點創造出只屬於當季風味的特色甜點。
              </p>
              <p class="text-lg text">
                使用最簡單細緻的方式烘培，讓顧客除了可以吃到食物本身的風味外，也能感受到其與甜點融合後的另一種層次口感。
              </p>
              <p class="text-lg text">
                堅持不添加任何加工食品，希望能讓顧客消費時感受到家一樣的溫暖與安心。
              </p>
            </div>

            <div class="prose prose-lg max-w-none">
              <p class="text-base italic tracking-wide text-[#403D39]">
                This means that with each season's unique fruits, we create a distinctive dessert
                that captures the essence of the season's flavors.
              </p>
              <p class="text-base italic tracking-wide text-[#403D39]">
                Using the simplest and most delicate baking methods, we aim for our customers to not
                only experience the true taste of the food itself but also the layered palate that
                emerges when it is combined with our dessert.
              </p>
              <p class="text-base italic tracking-wide text-[#403D39]">
                We insist on not adding any processed foods, hoping to provide our customers with
                the same warmth and reassurance they would feel at home.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  </Layout>
</template>
