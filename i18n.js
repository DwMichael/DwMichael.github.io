(function () {
	const translations = {
		en: {
			title: "Valheim Viki - Valheim companion guide",
			description: "Valheim Viki is a mobile Valheim companion guide with biomes, bosses, creatures, weapons, armor, food, crafting and resources.",
			ogDescription: "A complete mobile companion guide for Valheim.",
			navLabel: "Main navigation",
			languageLabel: "Language",
			navFeatures: "Features",
			navPreview: "Preview",
			navSupport: "Support",
			logoAlt: "Valheim Viki logo",
			heroCopy: "A complete Valheim companion guide in one mobile app. Biomes, bosses, creatures, weapons, armor, food, crafting and resources always at hand.",
			appLinksLabel: "App links",
			googlePlay: "Get it on Google Play",
			seeApp: "See the app",
			appInfoLabel: "App information",
			downloadsLabel: "Downloads",
			downloadsValue: "5K+",
			worksLabel: "Works",
			worksValue: "offline",
			categoryLabel: "Category",
			categoryValue: "entertainment",
			introEyebrow: "Fast search while playing",
			introTitle: "One app for planning expeditions, crafting and combat.",
			introCopy: "Valheim Viki helps you check important information quickly without interrupting gameplay. The app is designed for new players and experienced vikings who want a Valheim encyclopedia always nearby.",
			featuresEyebrow: "Inside the app",
			featuresTitle: "A guide to the most important Valheim systems.",
			featureOneTitle: "Biomes and places",
			featureOneCopy: "Explore world regions, important map locations, ore deposits and trees.",
			featureTwoTitle: "Bosses and creatures",
			featureTwoCopy: "Check enemies, mini-bosses, drops and combat preparation.",
			featureThreeTitle: "Equipment",
			featureThreeCopy: "Compare weapons, armor, tools and stats needed for progression.",
			featureFourTitle: "Crafting and food",
			featureFourCopy: "Plan materials, crafting stations, meals and meads before an expedition.",
			screensEyebrow: "App preview",
			screensTitle: "Quick access to the knowledge you need while playing.",
			mainScreenAlt: "Valheim Viki home screen",
			mainScreenCaption: "Home screen",
			searchScreenAlt: "Valheim Viki search screen",
			searchScreenCaption: "Search",
			favoriteScreenAlt: "Valheim Viki favorites screen",
			favoriteScreenCaption: "Favorites",
			supportEyebrow: "Help and contact",
			supportTitle: "Have a question or found an issue?",
			supportCopy: "Contact us or visit the app page on Google Play. Valheim Viki is developed and updated to become a complete encyclopedia for the game.",
			contactLabel: "Contact",
			footerCopy: "Valheim Viki by RABBITV. This is an unofficial companion app and is not affiliated with Valheim or its creators."
		},
		pl: {
			title: "Valheim Viki - przewodnik po Valheim",
			description: "Valheim Viki to mobilny przewodnik po Valheim z informacjami o biomach, bossach, stworzeniach, broniach, jedzeniu, rzemiosle i zasobach.",
			ogDescription: "Kompletny mobilny przewodnik po Valheim.",
			navLabel: "Glowna nawigacja",
			languageLabel: "Jezyk",
			navFeatures: "Funkcje",
			navPreview: "Podglad",
			navSupport: "Wsparcie",
			logoAlt: "Logo Valheim Viki",
			heroCopy: "Kompletny przewodnik po Valheim w jednej aplikacji mobilnej. Biomy, bossowie, stworzenia, bronie, zbroje, jedzenie, rzemioslo i zasoby zawsze pod reka.",
			appLinksLabel: "Linki aplikacji",
			googlePlay: "Pobierz w Google Play",
			seeApp: "Zobacz aplikacje",
			appInfoLabel: "Informacje o aplikacji",
			downloadsLabel: "Pobrania",
			downloadsValue: "5 tys.+",
			worksLabel: "Dziala",
			worksValue: "offline",
			categoryLabel: "Kategoria",
			categoryValue: "rozrywka",
			introEyebrow: "Szybkie wyszukiwanie podczas gry",
			introTitle: "Jedna aplikacja do planowania wypraw, craftingu i walki.",
			introCopy: "Valheim Viki pomaga szybko sprawdzic najwazniejsze informacje bez przerywania rozgrywki. Aplikacja jest projektowana dla nowych graczy i doswiadczonych wikingow, ktorzy chca miec encyklopedie Valheim zawsze pod reka.",
			featuresEyebrow: "Co znajdziesz w aplikacji",
			featuresTitle: "Przewodnik po najwazniejszych systemach Valheim.",
			featureOneTitle: "Biomy i miejsca",
			featureOneCopy: "Poznawaj regiony swiata, wazne punkty na mapie, zloza rud i drzewa.",
			featureTwoTitle: "Bossowie i stworzenia",
			featureTwoCopy: "Sprawdzaj przeciwnikow, mini-bossow, dropy i przygotowanie do walki.",
			featureThreeTitle: "Ekwipunek",
			featureThreeCopy: "Porownuj bronie, zbroje, narzedzia i statystyki potrzebne do progresu.",
			featureFourTitle: "Crafting i jedzenie",
			featureFourCopy: "Planuj materialy, stanowiska rzemieslnicze, potrawy i miody przed wyprawa.",
			screensEyebrow: "Podglad aplikacji",
			screensTitle: "Szybki dostep do wiedzy, ktorej potrzebujesz w trakcie gry.",
			mainScreenAlt: "Ekran glowny aplikacji Valheim Viki",
			mainScreenCaption: "Ekran glowny",
			searchScreenAlt: "Wyszukiwarka w aplikacji Valheim Viki",
			searchScreenCaption: "Wyszukiwarka",
			favoriteScreenAlt: "Ulubione elementy w aplikacji Valheim Viki",
			favoriteScreenCaption: "Ulubione",
			supportEyebrow: "Pomoc i kontakt",
			supportTitle: "Masz pytanie albo znalazles problem?",
			supportCopy: "Napisz do nas lub odwiedz strone aplikacji w Google Play. Valheim Viki jest rozwijana i aktualizowana, aby stawac sie kompletna encyklopedia gry.",
			contactLabel: "Kontakt",
			footerCopy: "Valheim Viki by RABBITV. To nieoficjalna aplikacja towarzyszaca i nie jest powiazana z Valheim ani jego tworcami."
		}
	};

	const fallbackLanguage = "en";
	const storageKey = "valheim-viki-language";

	function readStoredLanguage() {
		try {
			return localStorage.getItem(storageKey);
		} catch (error) {
			return null;
		}
	}

	function writeStoredLanguage(language) {
		try {
			localStorage.setItem(storageKey, language);
		} catch (error) {
			// Ignore storage errors; the language switch still works for the current page.
		}
	}

	function systemLanguage() {
		const languages = navigator.languages && navigator.languages.length
			? navigator.languages
			: [navigator.language || fallbackLanguage];
		const match = languages.find((language) => language.toLowerCase().startsWith("pl"));
		return match ? "pl" : fallbackLanguage;
	}

	function preferredLanguage() {
		const stored = readStoredLanguage();
		return translations[stored] ? stored : systemLanguage();
	}

	function setMeta(name, content) {
		const element = document.querySelector(name);
		if (element) {
			element.setAttribute("content", content);
		}
	}

	function applyLanguage(language, persist) {
		const dictionary = translations[language] || translations[fallbackLanguage];
		document.documentElement.lang = language;
		document.title = dictionary.title;
		setMeta('meta[name="description"]', dictionary.description);
		setMeta('meta[property="og:description"]', dictionary.ogDescription);

		document.querySelectorAll("[data-i18n]").forEach((element) => {
			const key = element.getAttribute("data-i18n");
			if (dictionary[key]) {
				element.textContent = dictionary[key];
			}
		});

		document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
			element.getAttribute("data-i18n-attr").split(",").forEach((entry) => {
				const parts = entry.split(":");
				const attr = parts[0] && parts[0].trim();
				const key = parts[1] && parts[1].trim();
				if (attr && key && dictionary[key]) {
					element.setAttribute(attr, dictionary[key]);
				}
			});
		});

		document.querySelectorAll("[data-lang]").forEach((button) => {
			const isActive = button.getAttribute("data-lang") === language;
			button.setAttribute("aria-pressed", String(isActive));
		});

		if (persist) {
			writeStoredLanguage(language);
		}
	}

	document.querySelectorAll("[data-lang]").forEach((button) => {
		button.addEventListener("click", () => {
			applyLanguage(button.getAttribute("data-lang"), true);
		});
	});

	applyLanguage(preferredLanguage(), false);
})();
