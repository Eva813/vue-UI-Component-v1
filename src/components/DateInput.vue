<!-- <template id="DateTimeInput">
  <date-picker ref="datePicker" input-class="form-control" popup-class="dropdown-menu" :type="inputType"
    :formatter="formatedDate" :range="rangeDate" v-model="dateValue" :placeholder="setPlaceholder" :lang="lang"
    :disabled="disabled" :clearable="clearable" :editable="editable" :disabled-date="disabledDate"
    :show-second="isShowSecond" :default-value="defaultDate" @change="changeDate" />
</template>
=
<script>
import { format } from "date-fns";

export default {
  name: "DateTimeInput",
  props: {
    name: {
      type: String,
      default: "Date"
    },
    inputType: {
      type: String,
      default: "date"
    },
    rangeDate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    setDate: {
      type: [Array, String],
      default: null
    },
    formatType: { type: String, default: null },
    maxDate: {
      type: String,
      default: null
    },
    minDate: {
      type: String,
      default: null
    },
    isShowSecond: {
      type: Boolean,
      default: true
    },
    isFormatCustomed: {
      type: Boolean,
      default: false
    },
    customFormatter: {
      type: Function,
      default: () => { }
    },
    allowedDates: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ""
    },
    defaultDate: {
      type: Date,
      default: () => new Date()
    }
  },
  data: function () {
    return {
      id: null,
      icon: "fa-calendar",
      dateValue: null,
      lang: {
        formatLocale: {
          firstDayOfWeek: 1 // 週一為第一天
        }
      },
      formatedDate: {
        stringify: date => {
          if (date) {
            if (this.isFormatCustomed) {
              return this.customFormatter(date);
            }
            return format(new Date(date), this.dateFormat);
          }
          return "";
        },
        parse: value => {
          return value ? new Date(value) : null;
        }
      }
    };
  },
  computed: {
    setPlaceholder() {
      if (this.placeholder) return this.placeholder;
      if (this.rangeDate) {
        if (this.inputType === "datetime") {
          return this.$t("dateinput_placeholder.date_time_range");
        }

        if (this.inputType === "month") {
          return this.$t("dateinput_placeholder.month_range");
        }
        return this.$t("dateinput_placeholder.date_range");
      }

      if (this.inputType === "datetime") {
        return this.$t("dateinput_placeholder.date_time");
      }

      if (this.inputType === "month") {
        return this.$t("dateinput_placeholder.month");
      }

      return this.$t("dateinput_placeholder.date");
    },
    dateFormat() {
      if (this.formatType != null) {
        return this.formatType;
      }
      if (this.inputType === "datetime") {
        return "yyyy/MM/dd HH:mm:ss";
      }

      if (this.inputType === "month") {
        return "yyyy/MM";
      }

      return "yyyy/MM/dd";
    },
    startDate() {
      return this.setDate.split(" ~ ")[0];
    },
    endDate() {
      return this.setDate.split(" ~ ")[1];
    }
  },
  watch: {
    value(val) {
      this.dateValue = val;
    },
    inputType(val) {
      if (val == "time") {
        this.icon = "fa-clock-o";
      } else {
        this.icon = "fa-calendar";
      }
    },
    setDate(to) {
      if (to == null || to.lengh == 0 || !to) {
        this.dateValue = "";
        return;
      }
      if (this.rangeDate) {
        if (this.endDate.length == 0) {
          this.dateValue = [new Date(this.startDate), new Date("9999/12/31")];
          return;
        }
        this.dateValue = [new Date(this.startDate), new Date(this.endDate)];
        return;
      }
      this.dateValue = new Date(to);
    }
  },
  methods: {
    disabledDate(date) {
      if (this.allowedDates.length) {
        const currentMonth = format(date, "yyyy-MM");
        return this.allowedDates.indexOf(currentMonth) === -1;
      }

      if (this.maxDate != null && this.minDate == null) {
        return new Date(this.maxDate) < date;
      }
      if (this.minDate != null && this.maxDate == null) {
        return new Date(this.minDate) > date;
      }
      if (this.minDate != null && this.maxDate != null) {
        return (
          new Date(this.minDate).setHours(0, 0, 0, 0) > date ||
          new Date(this.maxDate) < date
        );
      }
      return null;
    },
    changeDate(value) {
      this.dateValue = value;
      this.$emit("changeDate", { name: this.name, value: this.dateValue });
    },
    clearDate() {
      this.dateValue = "";
      this.$emit("changeDate", { name: this.name, value: this.dateValue });
    },
    initial() {
      this.dateValue = "";
      if (this.setDate == null || this.setDate.length == 0) {
        return;
      }
      if (this.rangeDate) {
        if (this.endDate.length == 0) {
          this.dateValue = [new Date(this.startDate), new Date("9999/12/31")];
          return;
        }
        this.dateValue = [new Date(this.startDate), new Date(this.endDate)];
        return;
      }
      this.dateValue = new Date(this.setDate);
    },
    autoFocusInput() {
      this.$refs.datePicker.focus();
    }

  },
  mounted() {
    this.initial();
  }
};
</script> -->
