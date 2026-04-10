# Kalkulator ekologii do sprawozdań

Projekt wspiera dwa ćwiczenia z przedmiotu **Ekologia i zarządzanie środowiskiem**:

1. `Poziom zanieczyszczenia powietrza`
2. `Parametry fizykochemiczne gleby`

Repozytorium zawiera:

- statyczną aplikację WWW działającą offline,
- skrypt Pythona generujący workbook Excel,
- gotowy plik `output/Ekologia_kalkulator.xlsx`.

Całość jest przygotowana po polsku i bez backendu, tak aby działała lokalnie z pliku `index.html` lub po publikacji na GitHub Pages.

## GitHub Pages

Repozytorium zawiera workflow `/.github/workflows/pages.yml`, który publikuje statyczną wersję projektu na GitHub Pages po pushu do `main`.

Do publikacji trafiają:

- `index.html`
- `style.css`
- `app.js`
- `assets/`
- `output/`
- `README.md`

Jeżeli repozytorium ma włączone GitHub Pages z użyciem GitHub Actions, strona powinna być dostępna pod adresem:

```text
https://migutto.github.io/Ekologia/
```

## Struktura plików

- `index.html` - główny interfejs aplikacji
- `style.css` - warstwa wizualna
- `app.js` - logika formularzy, obliczeń, eksportów CSV i wykresów SVG
- `assets/ekologia-badge.svg` - lokalny zasób graficzny
- `tools/generate_excel.py` - deterministyczny generator workbooka Excel
- `output/Ekologia_kalkulator.xlsx` - wygenerowany arkusz do użycia od razu

## Jak uruchomić aplikację

1. Otwórz lokalnie plik `index.html` w przeglądarce.
2. Korzystaj z dwóch zakładek:
   - `Powietrze`
   - `Gleba`
3. Możesz od razu użyć przycisków:
   - `Wczytaj dane przykładowe`
   - `Wyczyść dane`
   - eksportów CSV dla wyników

Aplikacja:

- działa bez internetu,
- akceptuje liczby z przecinkiem i kropką,
- liczy wyniki na bieżąco,
- nie przerywa pracy przy pustych polach,
- pokazuje ostrzeżenia przy brakujących mapowaniach limitów lub toksyczności.

## Jak odtworzyć workbook Excel

W katalogu repo uruchom:

```powershell
python tools/generate_excel.py
```

Skrypt zapisze plik:

```text
output/Ekologia_kalkulator.xlsx
```

Generator jest deterministyczny:

- używa stałych danych przykładowych,
- nie losuje wyników,
- zapisuje zawsze ten sam plik wyjściowy.

## Co robi aplikacja

### Powietrze

Sekcja `Powietrze` obsługuje:

- 3 stacje: `miejska`, `podmiejska`, `pozamiejska`,
- metadane stacji: typ punktu, województwo, adres, nazwa stacji,
- 10 kolejnych dni,
- jedną wspólną godzinę pomiaru,
- dynamiczną listę zanieczyszczeń,
- edytowalne mapowania limitów, toksyczności i synonimów,
- eksport danych i wyników do CSV,
- osobny wykres dla każdego zanieczyszczenia.

Obliczenia:

- `MIN`
- `ŚREDNIA`
- `MAX`
- `Psi = Σ(Cx / D24x)`
- `Tau = Σ(Cx * alpha_t)`
- przekroczenie średniej względem limitu
- przekroczenie pojedynczego maksimum względem limitu

Wyniki są rozdzielone na:

- podsumowanie stacji,
- statystyki dla poszczególnych zanieczyszczeń.

### Gleba

Sekcja `Gleba` obsługuje:

- kwasowość czynną,
- kwasowość wymienną,
- kwasowość hydrolityczną,
- masę gleby dla 1 ha,
- całkowitą kwasowość hydrolityczną warstwy gleby,
- zapotrzebowanie na wapno,
- sumę kationów zasadowych,
- pojemność sorpcyjną.

Obliczenia:

- średnie z pomiarów pH,
- `Hh = V * c * 10 * k`
- `Mz = p * h * rho`
- `Hh_ha = Hh * Mz / 100`
- `CaO = Hh_ha * 0.028`
- `CaCO3 = Hh_ha * 0.050`
- `S = (V * c - V1 * c1) * 4 * 5`
- `T = Hh + S`

Widok wynikowy eksponuje przede wszystkim:

- `Hh`
- `S`
- `T`
- `CaO`
- `CaCO3`
- klasyfikację gleby dla gleb uprawnych i leśnych

## Workbook Excel

Workbook zawiera arkusze:

1. `README`
2. `Powietrze_Dane`
3. `Powietrze_Mapowanie`
4. `Powietrze_Wyniki`
5. `Powietrze_Wykresy`
6. `Gleba_Dane`
7. `Gleba_Wyniki`
8. `Gleba_Wykresy`

Zasady układu:

- komórki wejściowe są wyróżnione jasnym niebieskim tłem,
- stałe i opisy są oznaczone na szaro,
- komórki z formułami są wizualnie oddzielone,
- wykresy są przygotowane od razu,
- Excel ma wymuszone pełne przeliczenie po otwarciu pliku.

## Mapowania wbudowane w projekt

### Limity dopuszczalne D24

- benzen = 5
- ditlenek azotu = 200
- ditlenek siarki = 125
- ozon = 120
- pył zawieszony PM10 = 50
- tlenek węgla = 10000

### Współczynniki toksyczności

- tlenek siarki IV = 1.0
- tlenek węgla II = 0.5
- tlenki azotu = 2.0
- ozon = 10.3
- pył zawieszony = 2.9
- chrom = 160.0
- cynk = 16.9
- kadm = 640.0
- miedź = 106.7
- ołów = 320.0
- żelazo = 2.0

### Przykładowe synonimy

- `O3 -> ozon`
- `CO -> tlenek węgla / tlenek węgla II`
- `NO2 -> ditlenek azotu / tlenki azotu`
- `SO2 -> ditlenek siarki / tlenek siarki IV`
- `PM10 -> pył zawieszony PM10 / pył zawieszony`

## Ostrzeżenie o brakujących mapowaniach

Projekt **nie dopisuje automatycznie** brakujących wartości.

Jeżeli zanieczyszczenie nie ma mapowania:

- dla limitu, pojawia się komunikat:
  `Brak wartości dopuszczalnej w instrukcji — zanieczyszczenie pominięto w indeksie jakości.`
- dla toksyczności, pojawia się komunikat:
  `Brak współczynnika toksyczności w instrukcji — zanieczyszczenie pominięto w indeksie toksyczności.`

To zachowanie jest celowe, aby nie tworzyć sztucznych współczynników lub limitów.

## Założenia

- W aplikacji i workbooku klasyfikacja gleby używa **średniego pH badanej próbki w KCl**.
- Pole `pH KCl` pozostaje pokazane jako wartość pomocnicza, bo taka struktura występuje w materiałach.
- Wykresy przeglądarkowe są generowane lokalnie jako `SVG`, bez zewnętrznych bibliotek.
- W workbooku przygotowano 6 slotów zanieczyszczeń w arkuszu `Powietrze_Dane`, zgodnie z pełną tabelą limitów z instrukcji.
- Brakujące limity lub współczynniki nie są zgadywane.
- W tym środowisku walidacja workbooka była strukturalna. Nie wykonywano renderu przez LibreOffice, bo narzędzia renderujące nie były dostępne.

## Zgodność z instrukcjami

### Ćwiczenie 1 - poziom zanieczyszczenia powietrza

- 3 stacje są obsłużone jawnie: miejska, podmiejska, pozamiejska.
- Każde zanieczyszczenie ma 10 dni danych dla jednej godziny pomiaru.
- Dla każdego zanieczyszczenia i stacji liczone są `MIN`, `ŚREDNIA`, `MAX`.
- Indeksy `Psi` i `Tau` są liczone na poziomie stacji.
- Wykresy porównują przebiegi dla trzech stacji na jednej osi czasu.
- Przekroczenia średniej i maksymalnego pojedynczego pomiaru są oznaczone osobno.

### Ćwiczenie 2 - parametry fizykochemiczne gleby

- Zachowano sekcje zgodne ze sprawozdaniem: kwasowość czynna, wymienna, hydrolityczna, suma kationów zasadowych i pojemność sorpcyjna.
- W centrum wyników znajdują się `Hh`, `S` i `T`.
- Dodano obliczenia dla 1 ha oraz zapotrzebowanie na `CaO` i `CaCO3`.
- Klasyfikacja gleby jest przedstawiona osobno dla gleb uprawnych i leśnych.
- W workbooku dodano neutralny blok `Interpretacja` oraz pomocnicze wykresy dla prezentacji.
