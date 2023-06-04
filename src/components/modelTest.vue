<template>
  <div class="modal fade" tabindex="-1" role="dialog" :id="id" :class="{ persistent: persistent }">
    <div class="modal-dialog modal-dialog-centered" :class="size" role="document">
      <div class="modal-content">
        <div class="modal-header" v-if="hasTitle">
          <h4 class="modal-title" v-html="title" />
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="onCancel">
            <span class="la la-times" aria-hidden="true" />
          </button>
        </div>
        <div class="modal-body">
          <slot name="modal-body" v-if="hasBodySlot" />
          <p class="mb-0" v-else v-html="textBody" />
        </div>
        <div class="modal-footer" v-if="showFooter">
          <button v-if="previousName" :id="previousName" type="button" class="btn mr-auto btn-link" @click="onPrevious"
            :data-qa="`qa-btn-${qaSubmitName}previous`">
            <span>
              <i class="la la-angle-left mr-2"></i>
              {{ previousBtn }}
            </span>
          </button>
          <button v-if="hasDelete" id="delete-button" type="button" class="btn mr-auto btn-link text-danger"
            @click="onDelete" :data-qa="`qa-btn-${qaSubmitName}delete`">
            <i class="lar la-trash-alt mr-2 jx-text-xl"></i>
          </button>
          <button type="button" class="btn btn-link text-secondary" data-dismiss="modal" @click="onCancel"
            :data-qa="'qa-btn-cancel'">
            <span>{{ cancelBtn }}</span>
          </button>
          <button :id="submitName" type="button" class="btn" :class="{
            disabled: hasError,
            'btn-danger': isDelete,
            'btn-primary': !(isDelete || isConfirm),
            'btn-success': isConfirm,
          }" @click="onSubmit" :data-qa="`qa-btn-${qaSubmitName}submit`">
            <span>{{ submitBtn }}</span>
          </button>
        </div>
        <div v-else>
          <slot name="modal-footer" v-if="hasFooterSlot" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  props: {
    id: { type: String, default: "modal-dialog" },
    modalSize: { type: String, default: "" },
    hasTitle: { type: Boolean, default: true },
    title: { type: String, default: "Modal title" },
    textBody: { type: String, default: "Modal body text goes here." },
    submitName: { type: String, default: null },
    cancelName: { type: String, default: null },
    isDelete: { type: Boolean, default: false },
    isConfirm: { type: Boolean, default: false },
    hasError: { type: Boolean, default: false },
    showFooter: { type: Boolean, default: true },
    qaSubmitName: { type: String, default: "" },
    persistent: { type: Boolean, default: false },
    previousName: { type: String, default: null },
    hasDelete: { type: Boolean, default: false }
  },
  computed: {
    hasBodySlot() {
      return !!this.$slots["modal-body"];
    },
    hasFooterSlot() {
      return !!this.$slots["modal-footer"];
    },
    submitBtn() {
      if (this.$props["submitName"] != null) {
        return this.submitName;
      } else {
        return this.$t("button.submit");
      }
    },
    cancelBtn() {
      if (this.$props["cancelName"] != null) {
        return this.cancelName;
      } else {
        return this.$t("button.cancel");
      }
    },
    previousBtn() {
      if (this.$props["previousName"] != null) {
        return this.previousName;
      } else {
        return this.$t("admin.previous_step");
      }
    },
    size() {
      switch (this.modalSize) {
        case "large":
          return "modal-lg";
        case "small":
          return "modal-sm";
        case "XL":
          return "modal-xl";
        case "middle":
          return "modal-md";
        default:
          return "";
      }
    }
  },
  methods: {
    onCancel() {
      this.toggleModal(this.id);
      this.$emit("cancel");
    },
    onSubmit() {
      if (!this.hasError) {
        this.$emit("submit");
      }
    },
    onPrevious() {
      this.$emit('previous')
    },
    onDelete() {
      this.$emit('delete')
    }
  }
};
</script>
