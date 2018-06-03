<template>
  <div 
    :class="[size, {'is-expanded': expanded}]" 
    class="datepicker control">
    <b-dropdown
      v-if="!isMobile || inline"
      ref="dropdown"
      :position="position"
      :disabled="disabled"
      :inline="inline">
      <b-input
        v-if="!inline"
        ref="input"
        slot="trigger"
        :value="formatValue(dateSelected)"
        :placeholder="placeholder"
        :size="size"
        :icon="icon"
        :icon-pack="iconPack"
        :rounded="rounded"
        :loading="loading"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
        autocomplete="off"
        @change.native="onChange($event.target.value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event) && checkHtml5Validity()"/>

      <b-dropdown-item 
        :disabled="disabled" 
        custom>
        <header class="datepicker-header">
          <template v-if="$slots.header !== undefined && $slots.header.length">
            <slot name="header" />
          </template>
          <div 
            v-else 
            class="pagination field is-centered">
            <a
              v-if="!isFirstMonth && !disabled"
              :disabled="disabled"
              class="pagination-previous"
              role="button"
              href="#"
              @click.prevent="decrementMonth"
              @keydown.enter.prevent="decrementMonth"
              @keydown.space.prevent="decrementMonth">

              <b-icon
                :pack="iconPack"
                icon="chevron-left"
                both
                type="is-primary is-clickable"/>
            </a>
            <a
              v-show="!isLastMonth && !disabled"
              :disabled="disabled"
              class="pagination-next"
              role="button"
              href="#"
              @click.prevent="incrementMonth"
              @keydown.enter.prevent="incrementMonth"
              @keydown.space.prevent="incrementMonth">

              <b-icon
                :pack="iconPack"
                icon="chevron-right"
                both
                type="is-primary is-clickable"/>
            </a>
            <div class="pagination-list">
              <b-field>
                <b-select
                  v-model="focusedDateData.month"
                  :disabled="disabled">
                  <option
                    v-for="(month, index) in monthNames"
                    :value="index"
                    :key="month">
                    {{ month }}
                  </option>
                </b-select>
                <b-select
                  v-model="focusedDateData.year"
                  :disabled="disabled">
                  <option
                    v-for="year in listOfYears"
                    :value="year"
                    :key="year">
                    {{ year }}
                  </option>
                </b-select>
              </b-field>
            </div>
          </div>
        </header>

        <b-datepicker-table
          v-model="dateSelected"
          :day-names="dayNames"
          :month-names="monthNames"
          :first-day-of-week="firstDayOfWeek"
          :min-date="minDate"
          :max-date="maxDate"
          :focused="focusedDateData"
          :disabled="disabled"
          :unselectable-dates="unselectableDates"
          :unselectable-days-of-week="unselectableDaysOfWeek"
          :selectable-dates="selectableDates"
          :events="events"
          :indicators="indicators"
          @close="$refs.dropdown.isActive = false"/>

        <footer
          v-if="$slots.default !== undefined && $slots.default.length"
          class="datepicker-footer">
          <slot/>
        </footer>
      </b-dropdown-item>
    </b-dropdown>

    <b-input
      v-else
      ref="input"
      :value="formatYYYYMMDD(value)"
      :placeholder="placeholder"
      :size="size"
      :icon="icon"
      :icon-pack="iconPack"
      :loading="loading"
      :max="formatYYYYMMDD(maxDate)"
      :min="formatYYYYMMDD(minDate)"
      :disabled="disabled"
      :readonly="false"
      v-bind="$attrs"
      type="date"
      autocomplete="off"
      @change.native="onChangeNativePicker"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event) && checkHtml5Validity()"/>
  </div>
</template>

<script>
import FormElementMixin from '../../utils/FormElementMixin'
import { isMobile } from '../../utils/helpers'
import config from '../../utils/config'

import { Dropdown, DropdownItem } from '../dropdown'
import Input from '../input'
import Field from '../field'
import Select from '../select'
import Icon from '../icon'
import DatepickerTable from './DatepickerTable'

export default {
  name: 'BDatepicker',
  components: {
    [DatepickerTable.name]: DatepickerTable,
    [Input.name]: Input,
    [Field.name]: Field,
    [Select.name]: Select,
    [Icon.name]: Icon,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
  },
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: Date,
    dayNames: {
      type: Array,
      default: () => {
        if (Array.isArray(config.defaultDayNames)) {
          return config.defaultDayNames
        }
        return ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S']
      },
    },
    monthNames: {
      type: Array,
      default: () => {
        if (Array.isArray(config.defaultMonthNames)) {
          return config.defaultMonthNames
        }
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
      },
    },
    firstDayOfWeek: {
      type: Number,
      default: () => {
        if (typeof config.defaultFirstDayOfWeek === 'number') {
          return config.defaultFirstDayOfWeek
        }
        return 0
      },
    },
    inline: Boolean,
    minDate: Date,
    maxDate: Date,
    focusedDate: Date,
    placeholder: String,
    readonly: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    unselectableDates: Array,
    unselectableDaysOfWeek: {
      type: Array,
      default: () => config.defaultUnselectableDaysOfWeek,
    },
    selectableDates: Array,
    dateFormatter: {
      type: Function,
      default: date => {
        if (typeof config.defaultDateFormatter === 'function') {
          return config.defaultDateFormatter(date)
        }
        const dateUTC = new Date(
          Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
        )
        return dateUTC.toLocaleDateString()
      },
    },
    dateParser: {
      type: Function,
      default: date => {
        if (typeof config.defaultDateParser === 'function') {
          return config.defaultDateParser(date)
        }
        return new Date(Date.parse(date))
      },
    },
    mobileNative: {
      type: Boolean,
      default: () => config.defaultDatepickerMobileNative,
    },
    position: String,
    events: Array,
    indicators: {
      type: String,
      default: 'dots',
    },
  },
  data() {
    const focusedDate = this.value || this.focusedDate || new Date()

    return {
      dateSelected: this.value,
      focusedDateData: {
        month: focusedDate.getMonth(),
        year: focusedDate.getFullYear(),
      },
      _elementRef: 'input',
      _isDatepicker: true,
    }
  },
  computed: {
    /*
            * Returns an array of years for the year dropdown. If earliest/latest
            * dates are set by props, range of years will fall within those dates.
            */
    listOfYears() {
      const latestYear = this.maxDate
        ? this.maxDate.getFullYear()
        : Math.max(new Date().getFullYear(), this.focusedDateData.year) + 3

      const earliestYear = this.minDate ? this.minDate.getFullYear() : 1900

      const arrayOfYears = []
      for (let i = earliestYear; i <= latestYear; i++) {
        arrayOfYears.push(i)
      }

      return arrayOfYears.reverse()
    },

    isFirstMonth() {
      if (!this.minDate) return false
      const dateToCheck = new Date(
        this.focusedDateData.year,
        this.focusedDateData.month
      )
      const date = new Date(this.minDate.getFullYear(), this.minDate.getMonth())
      return dateToCheck <= date
    },

    isLastMonth() {
      if (!this.maxDate) return false
      const dateToCheck = new Date(
        this.focusedDateData.year,
        this.focusedDateData.month
      )
      const date = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth())
      return dateToCheck >= date
    },

    isMobile() {
      return this.mobileNative && isMobile.any()
    },
  },
  watch: {
    /*
            * Emit input event with selected date as payload, set isActive to false.
            * Update internal focusedDateData
            */
    dateSelected(value) {
      const currentDate = !value ? new Date() : value
      this.focusedDateData = {
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
      }
      this.$emit('input', value)
      if (this.$refs.dropdown) {
        this.$refs.dropdown.isActive = false
      }
    },

    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    value(value) {
      this.dateSelected = value

      !this.isValid && this.$refs.input.checkHtml5Validity()
    },

    focusedDate(value) {
      if (value) {
        this.focusedDateData = {
          month: value.getMonth(),
          year: value.getFullYear(),
        }
      }
    },

    /*
            * Emit input event on month and/or year change
            */
    'focusedDateData.month': function(value) {
      this.$emit('change-month', value)
    },
    'focusedDateData.year': function(value) {
      this.$emit('change-year', value)
    },
  },
  methods: {
    /*
            * Emit input event with selected date as payload for v-model in parent
            */
    updateSelectedDate(date) {
      this.dateSelected = date
    },

    /*
            * Parse string into date
            */
    onChange(value) {
      const date = this.dateParser(value)
      if (date && !isNaN(date)) {
        this.dateSelected = date
      } else {
        // Force refresh input value when not valid date
        this.dateSelected = null
        this.$refs.input.newValue = this.dateSelected
      }
    },

    /*
            * Format date into string
            */
    formatValue(value) {
      if (value && !isNaN(value)) {
        return this.dateFormatter(value)
      }
      return null
    },

    /*
            * Either decrement month by 1 if not January or decrement year by 1
            * and set month to 11 (December)
            */
    decrementMonth() {
      if (this.disabled) return

      if (this.focusedDateData.month > 0) {
        this.focusedDateData.month -= 1
      } else {
        this.focusedDateData.month = 11
        this.focusedDateData.year -= 1
      }
    },

    /*
            * Either increment month by 1 if not December or increment year by 1
            * and set month to 0 (January)
            */
    incrementMonth() {
      if (this.disabled) return

      if (this.focusedDateData.month < 11) {
        this.focusedDateData.month += 1
      } else {
        this.focusedDateData.month = 0
        this.focusedDateData.year += 1
      }
    },

    /*
            * Format date into string 'YYYY-MM-DD'
            */
    formatYYYYMMDD(value) {
      const date = new Date(value)
      if (value && !isNaN(date)) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${year}-${(month < 10 ? '0' : '') + month}-${(day < 10
          ? '0'
          : '') + day}`
      }
      return ''
    },

    /*
            * Parse date from string
            */
    onChangeNativePicker(event) {
      const date = event.target.value
      this.dateSelected = date ? new Date(date) : null
    },
  },
}
</script>
