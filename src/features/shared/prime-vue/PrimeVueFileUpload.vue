<script setup>
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import { useToast } from "primevue/usetoast";
import FileUpload from "primevue/fileupload";

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = clear => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = event => {
  files.value = event.files;
  files.value.forEach(file => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = callback => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

const formatSize = bytes => {
  const k = 1024;
  const dm = 3;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};
</script>

<template>
  <div class="card">
    <FileUpload
      name="demo[]"
      url="/api/upload"
      @upload="onTemplatedUpload($event)"
      :multiple="true"
      accept="image/*"
      :maxFileSize="1000000"
      @select="onSelectedFiles"
    >
      <template
        #header="{ chooseCallback, uploadCallback, clearCallback, files }"
      >
        <div
          class="justify-content-between align-items-center flex flex-1 flex-wrap gap-2"
        >
          <div class="flex gap-2">
            <Button
              @click="chooseCallback()"
              icon="pi pi-images"
              rounded
              outlined
            ></Button>
            <Button
              @click="uploadEvent(uploadCallback)"
              icon="pi pi-cloud-upload"
              rounded
              outlined
              severity="success"
              :disabled="!files || files.length === 0"
            ></Button>
            <Button
              @click="clearCallback()"
              icon="pi pi-times"
              rounded
              outlined
              severity="danger"
              :disabled="!files || files.length === 0"
            ></Button>
          </div>
          <ProgressBar
            :value="totalSizePercent"
            :showValue="false"
            :class="[
              'md:w-20rem h-1rem w-full md:ml-auto',
              { 'exceeded-progress-bar': totalSizePercent > 100 },
            ]"
            ><span class="white-space-nowrap"
              >{{ totalSize }}B / 1Mb</span
            ></ProgressBar
          >
        </div>
      </template>
      <template
        #content="{
          files,
          uploadedFiles,
          removeUploadedFileCallback,
          removeFileCallback,
        }"
      >
        <div v-if="files.length > 0">
          <h5>Pending</h5>
          <div class="flex flex-wrap gap-5 p-0 sm:p-5">
            <div
              v-for="(file, index) of files"
              :key="file.name + file.type + file.size"
              class="card flex-column border-1 surface-border align-items-center m-0 flex gap-3 px-6"
            >
              <div>
                <img
                  role="presentation"
                  :alt="file.name"
                  :src="file.objectURL"
                  width="100"
                  height="50"
                />
              </div>
              <span class="font-semibold">{{ file.name }}</span>
              <div>{{ formatSize(file.size) }}</div>
              <Badge value="Pending" severity="warning" />
              <Button
                icon="pi pi-times"
                @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                outlined
                rounded
                severity="danger"
              />
            </div>
          </div>
        </div>

        <div v-if="uploadedFiles.length > 0">
          <h5>Completed</h5>
          <div class="flex flex-wrap gap-5 p-0 sm:p-5">
            <div
              v-for="(file, index) of uploadedFiles"
              :key="file.name + file.type + file.size"
              class="card flex-column border-1 surface-border align-items-center m-0 flex gap-3 px-6"
            >
              <div>
                <img
                  role="presentation"
                  :alt="file.name"
                  :src="file.objectURL"
                  width="100"
                  height="50"
                />
              </div>
              <span class="font-semibold">{{ file.name }}</span>
              <div>{{ formatSize(file.size) }}</div>
              <Badge value="Completed" class="mt-3" severity="success" />
              <Button
                icon="pi pi-times"
                @click="removeUploadedFileCallback(index)"
                outlined
                rounded
                severity="danger"
              />
            </div>
          </div>
        </div>
      </template>
      <template #empty>
        <div class="align-items-center justify-content-center flex-column flex">
          <i
            class="pi pi-cloud-upload border-circle text-400 border-400 border-2 p-5 text-8xl"
          />
          <p class="mb-0 mt-4">Drag and drop files to here to upload.</p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>
