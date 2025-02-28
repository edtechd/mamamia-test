<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import gql from "graphql-tag";
import { useI18n } from "vue-i18n";
import { useMutation } from "@vue/apollo-composable";
import { useQueryClient } from "@tanstack/vue-query";
import { useToast } from "primevue/usetoast";

import { RouterLink } from "vue-router";

import CustomButton from "@/src/features/shared/components/CustomButton.vue";
import CustomForm from "@/src/features/shared/components/CustomForm.vue";
import CustomIcon from "@/src/features/shared/components/CustomIcon.vue";
import CustomInputText from "@/src/features/shared/components/CustomInputText.vue";
import DividerWithText from "@/src/features/authorization/components/DividerWithText.vue";
import FacebookLogin from "@/src/features/authorization/components/FacebookLogin.vue";
import GoogleLogin from "@/src/features/authorization/components/GoogleLogin.vue";
import PhoneNumberInput from "@/src/features/shared/components/PhoneNumberInput.vue";

import { useAuthorizationStore } from "@/src/store/authorization.js";
import { useEmailOrPhoneInput } from "@/src/features/authorization/composables/useEmailOrPhoneInput.js";
import { useProvidersErrorHandler } from "@/src/features/authorization/composables/useProvidersErrorHandler.js";

import pushToast from "@/src/features/shared/composables/pushToast.js";

const { t } = useI18n();
const authorizationStore = useAuthorizationStore();

const router = useRouter();
const route = useRoute();

useProvidersErrorHandler();

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!, $remember: Boolean!) {
    Login(email: $email, password: $password, remember: $remember) {
      token
    }
  }
`;

const toast = useToast();
const form = ref({
  email: "",
  password: "",
  remember: false,
});
const isValid = ref(true);
const isLoading = ref(false);

const { isPhoneNumber, emailInput, phoneInput, countryPrefix } =
  useEmailOrPhoneInput(form);

const { onDone, mutate: login } = useMutation(LOGIN_MUTATION, {
  clientId: "auth",
});

function submitForm() {
  isLoading.value = true;
  login();
}

onDone(async result => {
  try {
    if (result.data.Login) {
      // localStorage.setItem("token", result.data.Login.token);
      await authorizationStore.fetchUserData();
      router.push(
        route?.params?.redirect
          ? { path: route.params.redirect }
          : { name: "CaregiverAgency" },
      );
    } else {
      pushToast({
        toast,
        customError: {
          title: t("components.signIn.error.title"),
          content: t("components.signIn.error.message"),
        },
      });
    }
  } catch (error) {
    pushToast({
      toast,
      error: error.graphQLErrors,
    });

    isLoading.value = false;
  }
});

useQueryClient().clear();
</script>

<template>
  <CustomForm
    v-model:valid="isValid"
    class="mx-auto mt-19 flex max-w-[376px] flex-col gap-12"
    @submit="
      login({
        email: form.email,
        password: form.password,
        remember: form.remember,
        phone_country_id: isPhoneNumber ? countryPrefix.id : null,
      })
    "
  >
    <!--    <Transition name="slide-down" mode="out-in">-->
    <PhoneNumberInput
      v-if="isPhoneNumber"
      ref="phoneInput"
      v-model="form.email"
      v-model:country="countryPrefix"
      name="email"
    />
    <CustomInputText
      v-else
      ref="emailInput"
      v-model="form.email"
      :placeholder="$t('views.signIn.form.email.placeholder')"
      type="text"
      name="email"
      minlength="4"
      required
    >
      <template #iconLeft>
        <CustomIcon name="mail" />
      </template>
    </CustomInputText>
    <!--    </Transition>-->

    <CustomInputText
      v-model="form.password"
      :placeholder="$t('views.login.form.password.placeholder')"
      type="password"
      minlength="4"
      name="password"
      required
    >
      <template #iconLeft>
        <CustomIcon name="password" />
      </template>
    </CustomInputText>

    <CustomButton :disabled="!isValid || isLoading" size="xl" type="submit">
      {{ $t("views.login.buttons.login") }}
    </CustomButton>

    <RouterLink
      to="/reset-password"
      class="text-center text-xs font-medium text-pink-900 transition-colors hover:text-brand-400"
    >
      {{ $t("components.signIn.frogotPassword") }}
    </RouterLink>

    <DividerWithText> {{ $t("components.signIn.or") }}</DividerWithText>
    <div class="flex flex-col gap-6">
      <FacebookLogin mode="login" />
      <GoogleLogin mode="login" />
    </div>
  </CustomForm>
</template>

<style scoped lang="scss"></style>
