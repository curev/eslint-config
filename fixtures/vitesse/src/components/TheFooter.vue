<script lang="tsx">
  import { RouterLink } from "vue-router";
  import { availableLocales, loadLanguageAsync } from "~/modules/i18n";

  export default defineComponent({
    setup() {
      const { t, locale } = useI18n();

      async function toggleLocales() {
        // change to some real logic
        const locales = availableLocales;
        const newLocale
          = locales[(locales.indexOf(locale.value) + 1) % locales.length];
        await loadLanguageAsync(newLocale);
        locale.value = newLocale;
      }

      return () => {
        return (
          <nav flex="~ gap-4" justify-center mt-6 text-xl>
            <RouterLink icon-btn title={t("button.home")} to="/">
              <div i-carbon-campsite />
            </RouterLink>

            <button icon-btn title={t("button.toggle_dark")} onClick={toggleDark}>
              <div i="carbon-sun dark:carbon-moon" />
            </button>

            <a icon-btn title={t("button.toggle_langs")} onClick={toggleLocales}>
              <div i-carbon-language />
            </a>

            <RouterLink
              icon-btn
              title={t("button.about")}
              to="/about"
            >
              <div i-carbon-dicom-overlay />
            </RouterLink>

            <a
              href="https://github.com/antfu/vitesse"
              icon-btn
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <div i-carbon-logo-github />
            </a>
          </nav>
        );
      };
    }
  });
</script>
