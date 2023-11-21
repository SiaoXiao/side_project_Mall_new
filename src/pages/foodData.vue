<template>
  <Layout>
    <PageContainer>
      <PageHeader position="justify-center">
        <template #title>安心嚴選 。 品質保證</template>
      </PageHeader>
      <main class="mb-10">
        <p class="text-center text">
          堅持使用當季新鮮水果與嚴選食材，用最安心的食材、最仔細的手法，經過不斷地嘗試、實驗，呈現給您最好的風味與品質。
        </p>
        <div
          class="flex flex-col items-center justify-center gap-5 mt-10 justify-items-center md:justify-items-start"
        >
          <div
            class="grid justify-items-center md:justify-items-start sm:grid-flow-col grid-cols-12 items-center max-w-[800px] w-full min-h-[150px]"
          >
            <div class="max-w-[220px] text-center col-span-12 sm:col-span-5">
              <h2 class="text-xl titleText">石安牧場動福蛋</h2>
              <p class="text">不使用抗生素及動物用藥品質保證的鮮蛋。</p>
            </div>
            <img
              src="../assets/other/egg.png"
              alt="egg"
              class="col-span-12 row-start-1 sm:col-span-6 md:col-start-6 md:col-span-2"
            />
          </div>
          <div
            class="grid justify-items-center md:justify-items-end sm:grid-flow-col grid-cols-12 items-center max-w-[800px] w-full min-h-[150px]"
          >
            <div
              class="max-w-[220px] text-center col-span-12 sm:col-span-5 col-start-1 md:col-start-8"
            >
              <h2 class="text-xl titleText">日本上原海藻糖</h2>
              <p class="text">
                可抑制澱粉老化，保持口感滑順柔軟且甜度為砂糖的一半，可以使其甜而不膩口。
              </p>
            </div>
            <img
              src="../assets/other/sugar.png"
              alt="sugar"
              class="col-span-12 row-start-1 sm:col-span-6 md:col-start-6 md:col-span-2"
            />
          </div>
          <div
            class="grid justify-items-center md:justify-items-start sm:grid-flow-col grid-cols-12 items-center max-w-[800px] w-full min-h-[150px]"
          >
            <div class="max-w-[220px] text-center col-span-12 sm:col-span-5">
              <h2 class="text-xl titleText">日本菓子粉</h2>
              <p class="text">純小麥製作，100%純天然無人工添加物。</p>
            </div>
            <img
              src="../assets/other/flour.png"
              alt="flour"
              class="col-span-12 row-start-1 sm:col-span-6 md:col-start-6 md:col-span-2"
            />
          </div>
          <div
            class="grid justify-items-center md:justify-items-end sm:grid-flow-col grid-cols-12 items-center max-w-[800px] w-full min-h-[150px]"
          >
            <div
              class="max-w-[220px] text-center col-span-12 sm:col-span-5 col-start-1 md:col-start-8"
            >
              <h2 class="text-xl titleText">依思尼無鹽發酵奶油條</h2>
              <p class="text">
                嚴格溫控長達近20小時的緩慢發酵熟成，成品入口即化更帶有榛果與奶香的特殊風味。
              </p>
            </div>
            <img
              src="../assets/other/butter.png"
              alt="butter"
              class="col-span-12 row-start-1 sm:col-span-6 md:col-start-6 md:col-span-2"
            />
          </div>
          <div
            class="grid justify-items-center md:justify-items-start sm:grid-flow-col grid-cols-12 items-center max-w-[800px] w-full min-h-[150px]"
          >
            <div class="max-w-[220px] text-center col-span-12 sm:col-span-5">
              <h2 class="text-xl titleText">法芙娜黑巧克力</h2>
              <p class="text">口感雖然純粹，但極富層次感。濃厚醇香，順滑如絲，甘甜悠長。</p>
            </div>
            <img
              src="../assets/other/chocolate.png"
              alt="chocolate"
              class="col-span-12 row-start-1 sm:col-span-6 md:col-start-6 md:col-span-2"
            />
          </div>
          <div class="max-w-[800px] w-full">
            <img src="../assets/other/bowl.png" alt="bowl" class="m-auto" />
          </div>
        </div>
      </main>
    </PageContainer>
  </Layout>
</template>
