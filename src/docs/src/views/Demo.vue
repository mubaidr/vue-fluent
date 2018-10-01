<template>
  <div>
    <h1 class="title is-2">Demo</h1>
    <h2 class="subtitle is-5">Demo of some components is available below, for complete list of available components, please visit Buefy Documentation.</h2>
    <div class="has-text-centered">
      <a
        class="button is-dark"
        href="//buefy.github.io/documentation"
        target="_blank">Buefy documentation</a>
    </div>
    <!-- Form -->
    <div>
      <h2 class="title is-3">Form Controls</h2>
      <section>
        <b-field label="Name">
          <b-input />
        </b-field>

        <b-field
          label="Email"
          type="is-danger"
          message="This email is invalid">
          <b-input
            type="email"
            value="john@"
            maxlength="30"/>
        </b-field>

        <b-field
          label="Username"
          type="is-success"
          message="This username is available">
          <b-input
            value="johnsilver"
            maxlength="30"/>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            value="iwantmytreasure"
            password-reveal/>
        </b-field>

        <b-field label="Message">
          <b-input
            maxlength="200"
            type="textarea"/>
        </b-field>

        <b-field label="Simple Dropdown">
          <b-select placeholder="Select a name">
            <option
              v-for="item in ['Africa', 'Asia', 'Australia', 'Other']"
              :value="item"
              :key="item">
              {{ item }}
            </option>
          </b-select>
        </b-field>

        <b-field label="Radio">
          <div class="block">
            <b-radio
              v-model="radio"
              native-value="Flint">
              Flint
            </b-radio>
            <b-radio
              v-model="radio"
              native-value="Silver">
              Silver
            </b-radio>
            <b-radio
              v-model="radio"
              native-value="Jack">
              Jack
            </b-radio>
            <b-radio
              v-model="radio"
              native-value="Vane"
              disabled>
              Vane
            </b-radio>
          </div>
        </b-field>


        <b-field label="Checkbox">
          <div class="block">
            <b-checkbox
              v-model="checkboxGroup"
              native-value="Silver">
              Silver
            </b-checkbox>
            <b-checkbox
              v-model="checkboxGroup"
              native-value="Flint">
              Flint
            </b-checkbox>
            <b-checkbox
              v-model="checkboxGroup"
              native-value="Vane">
              Vane
            </b-checkbox>
            <b-checkbox
              v-model="checkboxGroup"
              native-value="Billy"
              disabled>
              Billy
            </b-checkbox>
          </div>
        </b-field>

        <b-field label="Switch">
          <div class="field">
            <b-switch>Default</b-switch>
          </div>
        </b-field>

        <b-field label="Select a date">
          <b-datepicker
            placeholder="Click to select..."
            icon="calendar"/>
        </b-field>

        <strong>Choose File</strong>
        <b-field
          class="file">
          <b-upload v-model="files">
            <a class="button is-primary">
              <b-icon icon="upload"/>
              <span>Click to upload</span>
            </a>
          </b-upload>
        </b-field>
      </section>
    </div>

    <hr>

    <!-- Elements -->
    <div>
      <h2 class="title is-3">Elements</h2>
      <section>
        <h2 class="subtitle is-4">Messages</h2>
        <div class="columns">
          <div class="column">
            <b-message
              title="Primary"
              type="is-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
            </b-message>
          </div>
          <div class="column">
            <b-message
              title="Default">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
          </b-message></div>
        </div>


        <h2 class="subtitle is-4">Notifications</h2>
        <div class="columns">
          <div class="column">
            <b-notification
              type="is-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
            </b-notification>
          </div>
          <div class="column">
            <b-notification>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
            </b-notification>
          </div>
        </div>

        <div>
          <h2 class="subtitle is-4">Snack Bars</h2>
          <button
            class="button is-medium"
            @click="snackbar">
            Launch snackbar (default)
          </button>
        </div>

        <br>
        <div>
          <h2 class="subtitle is-4">Table</h2>
          <b-table
            :data="data"
            :columns="columns"/>
        </div>

        <br>
        <div>
          <h2 class="subtitle is-4">Tabs</h2>
          <b-tabs
            position="is-centered"
            class="block">
            <b-tab-item label="Pictures"/>
            <b-tab-item label="Music"/>
            <b-tab-item label="Videos"/>
          </b-tabs>
        </div>

        <br>
        <div>
          <h2 class="subtitle is-4">Toasts</h2>
          <button
            class="button is-medium"
            @click="toast">
            Launch toast (default)
          </button>
        </div>

        <br>
        <div>
          <h2 class="subtitle is-4">Tooltips</h2>
          <b-tooltip
            label="Tooltip right"
            position="is-right">
            <button class="button is-dark">
              Right
            </button>
          </b-tooltip>

          <b-tooltip label="Tooltip top">
            <button class="button is-dark">
              Top (default)
            </button>
          </b-tooltip>

          <b-tooltip
            label="Tooltip bottom"
            position="is-bottom">
            <button class="button is-dark">
              Bottom
            </button>
          </b-tooltip>

          <b-tooltip
            label="Tooltip left"
            position="is-left">
            <button class="button is-dark">
              Left
            </button>
          </b-tooltip>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 'Silver',
      checkboxGroup: ['Flint', 'Vane'],
      files: [],
      data: [
        {
          id: 1,
          first_name: 'Jesse',
          last_name: 'Simmons',
          gender: 'Male',
        },
        {
          id: 2,
          first_name: 'John',
          last_name: 'Jacobs',
          gender: 'Male',
        },
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
          label: 'Last Name',
        },
        {
          field: 'gender',
          label: 'Gender',
        },
      ],
    }
  },

  methods: {
    snackbar() {
      this.$snackbar.open(
        `Default, positioned bottom-right with a green 'OK' button`,
      )
    },

    toast() {
      this.$toast.open({
        message: 'Something happened',
        position: 'is-bottom',
      })
    },
  },
}
</script>

<style>
</style>
