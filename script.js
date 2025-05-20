// Highlight menu aktif berdasarkan URL
const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});


// Authentication check - Redirect to login if not authenticated
document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  // // If user is not logged in and this is not the login page, redirect to login
  // if (!isLoggedIn && !window.location.href.includes('login.html')) {
  //   window.location.href = 'login.html';
  //   return;
  // }
  
  // If user is logged in, update the navbar to show username and logout option
  if (isLoggedIn) {
    const username = localStorage.getItem('username') || 'User';
    updateNavbarForLoggedInUser(username);
  }
});

// Function to update navbar for logged in users
function updateNavbarForLoggedInUser(username) {
  const navLinks = document.getElementById('navLinksContainer');
  if (navLinks) {
    // Change login link to show username and logout option
    const loginLink = navLinks.querySelector('#loginNav');
    if (loginLink) {
      loginLink.textContent = `${username} (Logout)`;
      loginLink.setAttribute('href', '#');
      loginLink.setAttribute('id', 'logoutButton');
      
      // Add logout functionality
      loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
      });
    }
  }
}

// Navigation is now handled by direct links since we have separate HTML files
// No need for SPA navigation logic anymore

      // Login Form Handling
      document
        .getElementById("loginForm")
        ?.addEventListener("submit", function (e) {
          e.preventDefault();
          const username = this.username.value;
          const password = this.password.value;

          // Simulate login (in a real app, this would be an API call)
          if (username && password) {
            showAlert(
              `Login berhasil! Selamat datang, ${username}`,
              "Login Berhasil",
              "success"
            );
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('username', username);
            // You would typically redirect to a dashboard or home page here
            document.querySelector('.nav-link[data-page="home"]').click();
          } else {
            showAlert(
              "Silakan isi username dan password",
              "Input Tidak Lengkap",
              "Warning"
            );
          }
        });

      // Register Form Handling
      document
        .getElementById("registerForm")
        ?.addEventListener("submit", function (e) {
          e.preventDefault();
          const username = this.username.value;
          const email = this.email.value;
          const password = this.password.value;
          const confirmPassword = this.confirm_password.value;

          if (password !== confirmPassword) {
            showAlert(
              "Password dan konfirmasi password tidak cocok",
              "Kesalahan Pendaftaran",
              "danger"
            );
            return;
          }

          // Simulate registration (in a real app, this would be an API call)
          if (username && email && password) {
            showAlert(
              `Pendaftaran berhasil! Silakan login dengan akun ${username}`,
              "Pendaftaran Berhasil",
              "success"
            );
            document.querySelector('.nav-link[data-page="login"]').click();
          }
        });

      // --- Ingredient Conflict Data (MODIFIED with typicalConcentrations) ---
      const ingredientConflicts = {
        // Retinoids (Chemical)
        retinol: {
          conflicts: [
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "Retinol",
          potency: 3,
          typicalConcentrations: [
            { value: 0.2, label: "0.2%" },
            { value: 0.25, label: "0.25%" },
            { value: 0.3, label: "0.3%" },
            { value: 0.5, label: "0.5%" },
            { value: 1.0, label: "1.0%" },
            { value: 2.0, label: "2.0% (Max OTC)" },
          ],
        },
        retinal: {
          conflicts: [
            "retinol",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "Retinal",
          potency: 4,
          typicalConcentrations: [
            { value: 0.01, label: "0.01%" },
            { value: 0.03, label: "0.03%" },
            { value: 0.05, label: "0.05%" },
            { value: 0.1, label: "0.1%" },
          ],
        },
        adapalene: {
          conflicts: [
            "retinol",
            "retinal",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "Adapalene",
          potency: 4,
          typicalConcentrations: [
            { value: 0.1, label: "0.1% (OTC)" },
            { value: 0.3, label: "0.3% (Rx)" },
          ],
        },
        tretinoin: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "Tretinoin (Rx)",
          potency: 5,
          typicalConcentrations: [
            { value: 0.01, label: "0.01% (Rx)" },
            { value: 0.025, label: "0.025% (Rx)" },
            { value: 0.05, label: "0.05% (Rx)" },
            { value: 0.1, label: "0.1% (Rx)" },
          ],
        },

        // Exfoliants (Chemical)
        aha: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "AHA",
          potency: 3,
          typicalConcentrations: [
            // Glycolic/Lactic can vary
            { value: 2, label: "2% (Mild)" },
            { value: 5, label: "5% (Moderate)" },
            { value: 8, label: "8% (Strong)" },
            { value: 10, label: "10% (Very Strong)" },
            { value: 30, label: "30% (Peel - Pro Use)" },
          ],
        },
        bha: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "BHA",
          potency: 2,
          typicalConcentrations: [
            // Salicylic Acid
            { value: 0.5, label: "0.5%" },
            { value: 1.0, label: "1.0%" },
            { value: 2.0, label: "2.0%" },
          ],
        },
        pha: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "PHA",
          potency: 1,
          typicalConcentrations: [
            { value: 2, label: "2%" },
            { value: 5, label: "5%" },
            { value: 10, label: "10%" },
          ],
        },

        ahabhapha: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
            "aha",
            "bha",
            "pha",
            "willowbark",
          ],
          name: "AHA/BHA/PHA (Kombinasi)",
          potency: 2,
          typicalConcentrations: [],
        },

        // Antioxidants (Chemical)
        vitaminc: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "niacinamide",
            "benzoylperoxide",
            "sulfur",
            "ahabhapha",
          ],
          name: "Vitamin C (LAA/Deriv.)",
          potency: 2,
          typicalConcentrations: [
            // LAA often
            { value: 5, label: "5% (Beginner)" },
            { value: 10, label: "10%" },
            { value: 15, label: "15%" },
            { value: 20, label: "20% (Max)" },
          ],
        },
        vitamine: {
          conflicts: [],
          name: "Vitamin E",
          potency: 0,
          typicalConcentrations: [],
        },
        ferulicacid: {
          conflicts: [],
          name: "Ferulic Acid",
          potency: 0,
          typicalConcentrations: [],
        },

        // Brighteners / Multi-Action (Chemical)
        niacinamide: {
          conflicts: ["vitaminc"],
          name: "Niacinamide",
          potency: 1,
          typicalConcentrations: [
            { value: 2, label: "2% (Barrier)" },
            { value: 5, label: "5% (General)" },
            { value: 10, label: "10% (Oil/Pore)" },
            { value: 20, label: "20% (High - Caution)" },
          ],
        },
        azelaicacid: {
          conflicts: [],
          name: "Azelaic Acid",
          potency: 2,
          typicalConcentrations: [
            { value: 5, label: "5% (OTC)" },
            { value: 10, label: "10% (OTC)" },
            { value: 15, label: "15% (Rx)" },
            { value: 20, label: "20% (Rx)" },
          ],
        },
        arbutin: {
          conflicts: [],
          name: "Alpha Arbutin",
          potency: 1,
          typicalConcentrations: [
            { value: 1, label: "1%" },
            { value: 2, label: "2% (Common)" },
            { value: 5, label: "5% (Max)" },
          ],
        },
        tranexamic: {
          conflicts: [],
          name: "Tranexamic Acid",
          potency: 1,
          typicalConcentrations: [
            { value: 2, label: "2%" },
            { value: 3, label: "3%" },
            { value: 5, label: "5%" },
          ],
        },

        // Acne Treatments (Chemical)
        benzoylperoxide: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "sulfur",
          ],
          name: "Benzoyl Peroxide",
          potency: 3,
          typicalConcentrations: [
            { value: 2.5, label: "2.5%" },
            { value: 5.0, label: "5.0%" },
            { value: 10.0, label: "10.0%" },
          ],
        },
        sulfur: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "willowbark",
            "vitaminc",
            "benzoylperoxide",
          ],
          name: "Sulfur",
          potency: 2,
          typicalConcentrations: [
            { value: 3, label: "3%" },
            { value: 5, label: "5%" },
            { value: 10, label: "10%" },
          ],
        },

        // Hydrators / Barrier (Chemical) - Generally no specific concentrations needed for this tool's logic
        peptide: {
          conflicts: [],
          name: "Peptide",
          potency: 0,
          typicalConcentrations: [],
        },
        hyaluronicacid: {
          conflicts: [],
          name: "Hyaluronic Acid",
          potency: 0,
          typicalConcentrations: [],
        },
        panthenol: {
          conflicts: [],
          name: "Panthenol (B5)",
          potency: 0,
          typicalConcentrations: [],
        },
        ceramide: {
          conflicts: [],
          name: "Ceramides",
          potency: 0,
          typicalConcentrations: [],
        },
        betaglucan: {
          conflicts: [],
          name: "Beta-Glucan",
          potency: 0,
          typicalConcentrations: [],
        },
        glycerin: {
          conflicts: [],
          name: "Glycerin",
          potency: 0,
          typicalConcentrations: [],
        },

        // --- Natural Actives ---
        bakuchiol: {
          conflicts: [],
          name: "Bakuchiol",
          potency: 1,
          typicalConcentrations: [
            { value: 0.5, label: "0.5%" },
            { value: 1.0, label: "1.0%" },
            { value: 2.0, label: "2.0%" },
          ],
        },
        licoriceroot: {
          conflicts: [],
          name: "Licorice Root",
          potency: 1,
          typicalConcentrations: [],
        },
        squalane: {
          conflicts: [],
          name: "Squalane",
          potency: 0,
          typicalConcentrations: [],
        },
        centella: {
          conflicts: [],
          name: "Centella Asiatica (Cica)",
          potency: 0,
          typicalConcentrations: [],
        },
        greentea: {
          conflicts: [],
          name: "Green Tea Extract",
          potency: 1,
          typicalConcentrations: [],
        },
        allantoin: {
          conflicts: [],
          name: "Allantoin",
          potency: 0,
          typicalConcentrations: [],
        },
        chamomile: {
          conflicts: [],
          name: "Chamomile Extract",
          potency: 0,
          typicalConcentrations: [],
        },
        willowbark: {
          conflicts: [
            "retinol",
            "retinal",
            "adapalene",
            "tretinoin",
            "aha",
            "bha",
            "pha",
            "vitaminc",
            "benzoylperoxide",
            "sulfur",
          ],
          name: "Willow Bark (Nat. BHA)",
          potency: 1,
          typicalConcentrations: [], // Often standardized by salicin content, not direct % for this tool
        },
        rosehipoil: {
          conflicts: [],
          name: "Rosehip Oil",
          potency: 0,
          typicalConcentrations: [],
        },
        seabuckthornoil: {
          conflicts: [],
          name: "Sea Buckthorn Oil",
          potency: 0,
          typicalConcentrations: [],
        },
        ginseng: {
          conflicts: [],
          name: "Ginseng Extract",
          potency: 1,
          typicalConcentrations: [],
        },
      };
      // Note: Vitamin C vs Niacinamide is often debated and depends on formulation.
      // We include it as a *potential* conflict to be aware of (flushing).

      // --- Custom Alert Functionality ---
      const customAlertOverlay = document.getElementById("customAlertOverlay");
      const customAlertBox = document.getElementById("customAlertBox");
      const customAlertTitle = document.getElementById("customAlertTitle");
      const customAlertMessage = document.getElementById("customAlertMessage");
      const customAlertCloseButton =
        document.getElementById("customAlertClose");

      function showAlert(message, title = "Peringatan", type = "warning") {
        customAlertMessage.textContent = message;
        customAlertTitle.innerHTML = `<span class="icon">${getAlertIcon(
          type
        )}</span>${title}`;

        // Reset classes and add new type
        customAlertBox.className = "custom-alert-box"; // Reset to base
        customAlertBox.classList.add(`alert-${type}`); // Add specific type class

        customAlertOverlay.classList.add("show");
      }

      function getAlertIcon(type) {
        switch (type) {
          case "warning":
            return "⚠️";
          case "danger":
            return "🛑";
          case "success":
            return "✅";
          case "info":
            return "ℹ️";
          default:
            return "⚠️";
        }
      }

      if (customAlertCloseButton) {
        customAlertCloseButton.addEventListener("click", () => {
          customAlertOverlay.classList.remove("show");
        });
      }
      
      if (customAlertOverlay) {
        customAlertOverlay.addEventListener("click", (event) => {
          if (event.target === customAlertOverlay) {
            customAlertOverlay.classList.remove("show");
          }
        });
      }
      

      // --- Planner Calculation Logic (MODIFIED TO USE CONCENTRATION) ---
      function calculateRoutine() {
        // Get Selected Ingredients
        const selectedCheckboxes = document.querySelectorAll(
          '#ingredient-checkboxes input[type="checkbox"]:checked'
        );
        const selectedIngredients = [];
        const selectedIngredientNames = [];
        let maxPotency = 0; // <--- Initialize maxPotency

        selectedCheckboxes.forEach((checkbox) => {
          const value = checkbox.value;
          const ingredientData = ingredientConflicts[value]; // Get data for this ingredient

          selectedIngredients.push(value);

          // Update maxPotency if this ingredient is more potent
          if (ingredientData && ingredientData.potency > maxPotency) {
            maxPotency = ingredientData.potency;
          }
        });

        if (selectedIngredients.length === 0) {
          showAlert(
            "Mohon pilih setidaknya satu bahan aktif.",
            "Input Tidak Lengkap",
            "warning"
          );
          return;
        }

        // Get Other Input values
        const concentration =
          parseFloat(document.getElementById("concentration").value) || 0;
        const startDay =
          parseInt(document.getElementById("startDay").value) || 1;
        const tolerance =
          parseInt(document.getElementById("tolerance").value) || 1;

        // Validate other inputs
        if (
          concentration < 0 || // Allow 0 concentration for ingredients without %
          startDay <= 0 ||
          tolerance < 1 ||
          tolerance > 10
        ) {
          showAlert(
            "Mohon masukkan nilai yang valid untuk Konsentrasi (>=0), Hari Mulai (>0), dan Toleransi (1-10).",
            "Input Tidak Valid",
            "warning"
          );
          return;
        }

        // --- Conflict Check (Logic remains the same) ---
        let conflictMessages = [];
        const checkedPairs = new Set();
        for (let i = 0; i < selectedIngredients.length; i++) {
          const ing1Value = selectedIngredients[i];
          const ing1Data = ingredientConflicts[ing1Value];
          if (!ing1Data) continue;
          for (let j = i + 1; j < selectedIngredients.length; j++) {
            const ing2Value = selectedIngredients[j];
            const ing2Data = ingredientConflicts[ing2Value];
            if (!ing2Data) continue;
            const pairKey = [ing1Value, ing2Value].sort().join("-");
            if (checkedPairs.has(pairKey)) continue;
            if (
              (ing1Data.conflicts && ing1Data.conflicts.includes(ing2Value)) ||
              (ing2Data.conflicts && ing2Data.conflicts.includes(ing1Value))
            ) {
              if (
                (ing1Value === "niacinamide" && ing2Value === "vitaminc") ||
                (ing1Value === "vitaminc" && ing2Value === "niacinamide")
              ) {
                conflictMessages.push(
                  `<li><strong>${ing1Data.name} & ${ing2Data.name}:</strong> Potensi flushing. Sebaiknya beri jeda/waktu berbeda.</li>`
                );
              } else {
                const name1 =
                  ing1Value === "other" ? "Bahan Lainnya" : ing1Data.name;
                const name2 =
                  ing2Value === "other" ? "Bahan Lainnya" : ing2Data.name;
                conflictMessages.push(
                  `<li><strong>${ing1Data.name} & ${ing2Data.name}:</strong> Risiko iritasi tinggi. Sangat disarankan digunakan pada waktu/hari berbeda.</li>`
                );
              }
            }
            checkedPairs.add(pairKey);
          }
        }

        // --- Schedule Calculation (MODIFIED based on tolerance, concentration, AND potency) ---
        let scheduleDaysArray = [];
        let currentDay = startDay;

        // Calculate concentration adjustment
        let concentrationAdjustment = 0;
        if (concentration >= 10) {
          concentrationAdjustment = 2;
        } else if (concentration >= 2) {
          concentrationAdjustment = 1;
        }

        // Calculate base interval from tolerance
        const toleranceBasedInterval = Math.floor(5 - tolerance / 2);

        // --- NEW: Calculate ingredient potency adjustment ---
        let ingredientPotencyAdjustment = 0;
        if (maxPotency >= 4) {
          // Very Strong / Rx (Potency 4 or 5)
          ingredientPotencyAdjustment = 3; // Add 3 extra days
        } else if (maxPotency === 3) {
          // Strong (Potency 3)
          ingredientPotencyAdjustment = 2; // Add 2 extra days
        } else if (maxPotency === 2) {
          // Moderate (Potency 2)
          ingredientPotencyAdjustment = 1; // Add 1 extra day
        }
        // Potency 0 or 1 doesn't add extra days beyond tolerance/concentration adjustments

        console.log(`Tolerance Based Interval: ${toleranceBasedInterval}`);
        console.log(
          `Concentration Adjustment: +${concentrationAdjustment} days`
        );
        console.log(`Max Potency Found: ${maxPotency}`);
        console.log(
          `Ingredient Potency Adjustment: +${ingredientPotencyAdjustment} days`
        );

        // Calculate the final base difference (interval), ensuring it's at least 1 day
        const baseDifference = Math.max(
          1,
          toleranceBasedInterval +
            concentrationAdjustment +
            ingredientPotencyAdjustment
        );
        console.log(`Final Base Difference (Interval): ${baseDifference} days`);

        // Generate the first 6 usage days using the adjusted base difference
        for (let i = 0; i < 6; i++) {
          scheduleDaysArray.push(currentDay);
          currentDay += baseDifference + i; // Interval still increases gradually
        }

        // --- Effect Calculation (remains as a general guide) ---
        let effects = [];
        // Consider using potency slightly in effect calculation? Maybe later. Keep simple for now.
        const effectRatio = Math.max(
          1,
          1 + (concentration * tolerance * (1 + maxPotency / 5)) / 75
        ); // Minor potency influence added
        for (let i = 0; i < 3; i++) {
          effects.push(i === 0 ? 1 : effects[i - 1] * effectRatio);
        }
        const maxConsecutive = Math.min(
          3,
          Math.ceil(tolerance / (1 + maxPotency / 2))
        ); // Potency reduces max consecutive days

        // --- Display Results ---
        const resultDiv = document.getElementById("result-summary");
        let summaryHTML = `
            <h3>Ringkasan Perhitungan</h3>
            <p><strong>Bahan Aktif Dipilih:</strong> ${selectedIngredientNames.join(
              ", "
            )}</p>
            <p><strong>Konsentrasi Umum:</strong> ${concentration}%</p>
            <p><strong>Potensi Tertinggi dari Bahan yang Dipilih:</strong> ${maxPotency} (0=Lembut, 5=Sangat Kuat)</p> <!-- NEW -->
            <p><strong>Jadwal 6 Pemakaian Awal (berdasarkan Toleransi, Konsentrasi, & Potensi Bahan):</strong> Hari ke-${scheduleDaysArray.join(
              ", "
            )}</p>
            <p><strong>Estimasi Efek Kumulatif (3x pakai, panduan):</strong> ${effects
              .map((e) => e.toFixed(1) + "x")
              .join(" → ")}</p>
            <p><strong>Saran Maks. Pemakaian Beruntun (umum, dipengaruhi potensi):</strong> ${maxConsecutive} hari (kemudian istirahat)</p>
            <p><strong>Rekomendasi Umum:</strong> ${getRecommendation(
              selectedIngredients,
              concentration,
              maxConsecutive,
              conflictMessages.length > 0
            )}</p>
            <p style="font-size: 0.8em; color: var(--text-light);"><i>*Interval awal (${baseDifference} hari) adalah estimasi berdasarkan Toleransi (${tolerance}), Konsentrasi (${concentration}%), dan Potensi Bahan Tertinggi (${maxPotency}). Selalu sesuaikan dengan reaksi kulit.</i></p> <!-- Updated explanation -->
        `;

        // Add conflict warnings if any (remains the same)
        if (conflictMessages.length > 0) {
          summaryHTML += `
                <div class="warning-section">
                    <h4><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>Peringatan Potensi Konflik Bahan Aktif!</h4>
                    <p>Menggunakan bahan aktif berikut secara bersamaan dapat meningkatkan risiko iritasi:</p>
                    <ul>
                        ${conflictMessages.join("")}
                    </ul>
                    <p style="font-size: 0.9em; margin-top: 8px;"><strong>Saran:</strong> Pisahkan penggunaan bahan-bahan ini (misal: pagi vs malam, atau hari berbeda) untuk keamanan kulit Anda. Lihat Skincare Library untuk detail.</p>
                </div>
            `;
        }

        resultDiv.innerHTML = summaryHTML;
        resultDiv.style.display = "block";

        // Display Calendar (remains the same)
        const displayName =
          selectedIngredientNames.length === 1
            ? selectedIngredientNames[0]
            : "Bahan Aktif";
        displayScheduleCalendar(scheduleDaysArray, displayName);
      }

      // --- Get Recommendation (MODIFIED) ---
      function getRecommendation(
        ingredients,
        concentration,
        maxConsecutive,
        hasConflicts
      ) {
        let rec = `Mulai dengan jadwal yang dihitung. `;

        if (hasConflicts) {
          rec += `<strong>PENTING: Ada potensi konflik! JANGAN gunakan bahan aktif yang berkonflik secara bersamaan.</strong> Pisahkan waktu (pagi/malam) atau hari. Perhatikan detail: `;
        }

        // Specific Advice (prioritize Rx/Strongest)
        if (ingredients.includes("tretinoin")) {
          rec += `**Tretinoin (Rx) sangat kuat!** Mulai 1-2x/minggu maks, hanya malam hari. WAJIB di bawah pengawasan dokter. **Hindari layering dengan SEMUA eksfolian (AHA/BHA/PHA/Willow Bark), Vit C LAA, BP, Sulfur.** `;
        } else if (ingredients.includes("adapalene")) {
          rec += `Adapalene (retinoid generasi 3) efektif untuk jerawat. Mulai perlahan (2-3x/minggu malam). **Hindari layering dengan eksfolian, Vit C LAA, BP, Sulfur.** `;
        } else if (ingredients.includes("retinal")) {
          rec += `Retinal lebih kuat dari Retinol. Mulai sangat perlahan. **Hindari layering dengan eksfolian, Vit C LAA, BP, Sulfur.** `;
        } else if (ingredients.includes("retinol")) {
          rec += `Retinol butuh adaptasi. **Hindari layering dengan eksfolian, Vit C LAA, BP, Sulfur.** `;
        }

        // Keep existing advice for BP, Sulfur, Exfoliants (AHA/BHA/PHA), Vit C
        if (
          ingredients.includes("benzoylperoxide") &&
          !ingredients.some((ing) =>
            ["tretinoin", "adapalene", "retinal", "retinol"].includes(ing)
          )
        ) {
          rec += `BP **jangan digabung Retinoid**. Sangat hati-hati dengan eksfolian, Vit C, Sulfur. `;
        }
        if (
          ingredients.includes("sulfur") &&
          !ingredients.some((ing) =>
            [
              "tretinoin",
              "adapalene",
              "retinal",
              "retinol",
              "benzoylperoxide",
            ].includes(ing)
          )
        ) {
          rec += `Sulfur bisa mengeringkan. Hati-hati layering dengan Retinoid/BP/Eksfolian/Vit C. `;
        }
        if (
          (ingredients.includes("aha") ||
            ingredients.includes("bha") ||
            ingredients.includes("pha") ||
            ingredients.includes("willowbark")) &&
          !ingredients.some((ing) =>
            ["tretinoin", "adapalene", "retinal", "retinol"].includes(ing)
          )
        ) {
          let exfoliantTypes = [];
          if (ingredients.includes("aha")) exfoliantTypes.push("AHA");
          if (ingredients.includes("bha")) exfoliantTypes.push("BHA");
          if (ingredients.includes("pha")) exfoliantTypes.push("PHA");
          if (ingredients.includes("willowbark"))
            exfoliantTypes.push("Willow Bark (Nat. BHA)");
          rec += `Untuk ${exfoliantTypes.join(
            "/"
          )}: Batasi frekuensi awal (Willow Bark/PHA paling lembut). **Hindari layering dengan Retinoid/BP/Sulfur/Vit C atau sesama eksfolian lain.** `;
        }
        if (
          ingredients.includes("vitaminc") &&
          ingredients.includes("niacinamide") &&
          !hasConflicts
        ) {
          rec += `Potensi flushing jika Vit C (LAA pH rendah) dilayer langsung dengan Niacinamide. `;
        }

        if (ingredients.includes("ahabhapha")) {
          rec += `Untuk produk kombinasi AHA/BHA/PHA: Produk ini biasanya diformulasikan agar bahan aktif bekerja sinergis dengan konsentrasi individual yang lebih terkontrol. **Meskipun begitu, tetap hindari layering langsung dengan Retinoid (semua jenis), Benzoyl Peroxide, Sulfur, atau Vitamin C (LAA) potensi tinggi.** Idealnya, jangan gunakan bersamaan dengan produk eksfolian tunggal lainnya (AHA, BHA, atau PHA terpisah) untuk menghindari risiko over-exfoliasi. Perhatikan frekuensi penggunaan sesuai anjuran produk dan reaksi kulit Anda. `;
        }

        // Advice for generally well-tolerated / New Naturals
        if (ingredients.includes("bakuchiol") && !hasConflicts) {
          rec += `Bakuchiol sering jadi alternatif Retinol. Mulai perlahan jika dilayer dengan banyak bahan aktif lain. `;
        }
        if (ingredients.includes("greentea")) {
          rec += `Green Tea aman dilayer untuk antioksidan/soothing. `;
        }
        if (ingredients.includes("allantoin")) {
          rec += `Allantoin aman dilayer untuk soothing. `;
        }
        if (ingredients.includes("chamomile")) {
          rec += `Chamomile aman dilayer untuk soothing. `;
        }
        if (
          ingredients.includes("rosehipoil") ||
          ingredients.includes("seabuckthornoil")
        ) {
          rec += `Rosehip/Sea Buckthorn Oil baik untuk nutrisi/barrier, gunakan sebagai langkah akhir atau sesuai preferensi. `;
        }
        if (ingredients.includes("ginseng")) {
          rec += `Ginseng aman dilayer untuk energi/antioksidan. `;
        }
        if (ingredients.includes("glycerin")) {
          rec += `Glycerin aman dilayer untuk hidrasi dasar. `;
        }

        // Keep existing safe layer notes: Panthenol, Vit E, Ferulic, Licorice, Squalane, Beta-Glucan, Azelaic, Arbutin, Tranexamic, Peptide, HA, Ceramide, Centella
        if (ingredients.includes("panthenol")) {
          rec += `Panthenol (B5) aman dilayer. `;
        }
        if (ingredients.includes("vitamine")) {
          rec += `Vitamin E baik dilayer. `;
        }
        if (ingredients.includes("ferulicacid")) {
          rec += `Ferulic Acid aman dilayer. `;
        }
        if (ingredients.includes("licoriceroot")) {
          rec += `Licorice Root aman dilayer. `;
        }
        if (ingredients.includes("squalane")) {
          rec += `Squalane aman dilayer. `;
        }
        if (ingredients.includes("betaglucan")) {
          rec += `Beta-Glucan aman dilayer. `;
        }
        if (ingredients.includes("azelaicacid") && !hasConflicts) {
          rec += `Azelaic Acid umumnya bisa 1-2x sehari. `;
        }
        if (ingredients.includes("arbutin") && !hasConflicts) {
          rec += `Alpha Arbutin umumnya bisa 1-2x sehari. `;
        }
        if (ingredients.includes("tranexamic") && !hasConflicts) {
          rec += `Tranexamic Acid umumnya bisa 1-2x sehari. `;
        }
        if (ingredients.includes("peptide") && !hasConflicts) {
          rec += "Peptide (umum) bisa digunakan pagi/malam. ";
        }
        if (ingredients.includes("hyaluronicacid")) {
          rec += `Hyaluronic Acid aman dilayer. `;
        }
        if (ingredients.includes("ceramide")) {
          rec += `Ceramides aman dilayer. `;
        }
        if (ingredients.includes("centella")) {
          rec += `Centella (Cica) aman dilayer. `;
        }

        if (
          !ingredients.includes("ahabhapha") &&
          (ingredients.includes("aha") ||
            ingredients.includes("bha") ||
            ingredients.includes("pha") ||
            ingredients.includes("willowbark")) &&
          !ingredients.some((ing) =>
            ["tretinoin", "adapalene", "retinal", "retinol"].includes(ing)
          )
        ) {
          let exfoliantTypes = [];
          if (ingredients.includes("aha")) exfoliantTypes.push("AHA");
          if (ingredients.includes("bha")) exfoliantTypes.push("BHA");
          if (ingredients.includes("pha")) exfoliantTypes.push("PHA");
          if (ingredients.includes("willowbark"))
            exfoliantTypes.push("Willow Bark (Nat. BHA)");
          rec += `Untuk ${exfoliantTypes.join(
            "/"
          )}: Batasi frekuensi awal (Willow Bark/PHA paling lembut). **Hindari layering dengan Retinoid/BP/Sulfur/Vit C atau sesama eksfolian lain.** `;
        }

        rec +=
          "Selalu gunakan sunscreen di pagi hari, terutama jika menggunakan Retinoid (semua jenis!), Eksfolian, Vit C, BP, atau Sulfur.";
        return rec;
      }

      // --- Calendar Display Function (No major changes needed) ---
      function displayScheduleCalendar(usageDays, displayIngredientName) {
        const scheduleDiv = document.getElementById("schedule-display");
        scheduleDiv.innerHTML = ""; // Clear previous calendar

        if (!usageDays || usageDays.length === 0) {
          scheduleDiv.innerHTML = "<p>Tidak ada jadwal untuk ditampilkan.</p>";
          return;
        }

        const maxDayInSchedule = Math.max(...usageDays);
        // Ensure calendar shows at least up to the last usage day, maybe a bit more context
        // Show at least 4 weeks or enough weeks to cover the schedule
        const totalWeeks = Math.max(4, Math.ceil(maxDayInSchedule / 7));

        for (let week = 1; week <= totalWeeks; week++) {
          const weekStart = (week - 1) * 7 + 1;
          const weekEnd = week * 7;

          // Don't display weeks way past the schedule unless it's within the first 4 weeks
          if (week > 4 && weekStart > maxDayInSchedule + 7) break;

          const weekContainer = document.createElement("div");
          weekContainer.className = "week-container";

          const weekTitle = document.createElement("div");
          weekTitle.className = "week-title";
          weekTitle.textContent = `Minggu ${week} (Hari ${weekStart}-${weekEnd})`;
          weekContainer.appendChild(weekTitle);

          const daysGrid = document.createElement("div");
          daysGrid.className = "days-grid";

          for (let day = weekStart; day <= weekEnd; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "day";

            const dayNumber = document.createElement("div");
            dayNumber.className = "day-number";
            dayNumber.innerHTML = `Hari ${day} <span class="day-of-week">${getDayOfWeek(
              day
            )}</span>`;
            dayDiv.appendChild(dayNumber);

            if (usageDays.includes(day)) {
              const activeItem = document.createElement("div");
              activeItem.className = "active-item";
              activeItem.textContent = displayIngredientName; // Use the provided name
              dayDiv.appendChild(activeItem);
              dayDiv.style.backgroundColor = "var(--secondary)"; // Highlight usage days
            } else {
              // Optionally show 'Istirahat' only between the first and last usage day
              if (day >= usageDays[0] && day <= maxDayInSchedule) {
                const emptyDay = document.createElement("div");
                emptyDay.className = "empty-day";
                emptyDay.textContent = "Istirahat";
                dayDiv.appendChild(emptyDay);
              } else if (day < usageDays[0]) {
                const emptyDay = document.createElement("div");
                emptyDay.className = "empty-day";
                emptyDay.textContent = "Belum Mulai";
                dayDiv.appendChild(emptyDay);
              }
            }
            daysGrid.appendChild(dayDiv);
          } // End day loop
          weekContainer.appendChild(daysGrid);
          scheduleDiv.appendChild(weekContainer);
        } // End week loop
      }

      // --- Get Day of Week Helper (No changes needed) ---
      function getDayOfWeek(day) {
        const days = [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
        ];
        // Adjust calculation slightly if startDay affects the 'actual' day of week
        // For simplicity here, we assume day 1 = Minggu index 0, day 2 = Senin index 1 etc.
        // A more accurate calendar would need the actual month/year start day.
        return days[(day - 1) % 7];
      }

      // --- Save/Load Logic (No changes needed) ---
      function saveRoutineData() {
        if (!localStorage.getItem("isLoggedIn")) {
          showAlert("Anda harus login untuk menyimpan data.", "Akses Ditolak", "danger");
          return;
        }
      
        // Lanjutkan proses simpan...
        const selectedCheckboxes = document.querySelectorAll(
          '#ingredient-checkboxes input[type="checkbox"]:checked'
        );
        const selectedIngredientValues = [];
        selectedCheckboxes.forEach((checkbox) =>
          selectedIngredientValues.push(checkbox.value)
        );
      
        const dataToSave = {
          ingredients: selectedIngredientValues,
          concentration: document.getElementById("concentration").value,
          startDay: document.getElementById("startDay").value,
          tolerance: document.getElementById("tolerance").value,
        };
      
        try {
          localStorage.setItem("smartSkinRoutine", JSON.stringify(dataToSave));
          showAlert("Data routine berhasil disimpan!", "Sukses", "success");
        } catch (e) {
          console.error("Gagal menyimpan data:", e);
          showAlert(
            "Gagal menyimpan data. Penyimpanan lokal mungkin penuh atau tidak didukung.",
            "Kesalahan Penyimpanan",
            "danger"
          );
        }
      }
      

      function loadRoutineData() {
        if (!localStorage.getItem("isLoggedIn")) {
          showAlert("Anda harus login untuk memuat data.", "Akses Ditolak", "danger");
          return;
        }
        
        const savedData = localStorage.getItem("smartSkinRoutine");
        if (savedData) {
          try {
            const data = JSON.parse(savedData);

            // Uncheck all first
            document
              .querySelectorAll('#ingredient-checkboxes input[type="checkbox"]')
              .forEach((checkbox) => {
                checkbox.checked = false;
              });

            // Check saved ingredients
            if (data.ingredients && Array.isArray(data.ingredients)) {
              data.ingredients.forEach((value) => {
                const checkbox = document.querySelector(
                  `#ingredient-checkboxes input[value="${value}"]`
                );
                if (checkbox) {
                  checkbox.checked = true;
                }
              });
            }

            document.getElementById("concentration").value =
              data.concentration || "0.5";
            document.getElementById("startDay").value = data.startDay || "1";
            document.getElementById("tolerance").value = data.tolerance || "5";
            showAlert("Data routine berhasil dimuat!", "Sukses", "success");

            // Clear results when loading
            document.getElementById("result-summary").style.display = "none";
            document.getElementById("schedule-display").innerHTML =
              '<p style="text-align: center; color: #999;">Klik "Hitung Jadwal & Cek Konflik" untuk melihat visualisasi.</p>';
          } catch (e) {
            console.error("Gagal memuat data:", e);
            showAlert(
              "Gagal memuat data tersimpan. Data mungkin rusak.",
              "Kesalahan Memuat",
              "danger"
            );
            localStorage.removeItem("smartSkinRoutine"); // Remove corrupted data
          }
        } else {
          showAlert(
            "Tidak ada data routine yang tersimpan.",
            "Informasi",
            "info"
          );
        }
      }



      function showDetailModal(title, icon, description) {
        const modal = document.getElementById("detailModal");
        const overlay = document.getElementById("modalOverlay");
        const details = ingredientDetails[title];

        if (!details) {
          // Gunakan fungsi showAlert jika ada, atau alert biasa
          if (typeof showAlert === "function") {
            showAlert(
              "Detail belum tersedia untuk bahan ini",
              "Informasi",
              "info"
            );
          } else {
            alert("Detail belum tersedia untuk bahan ini");
          }
          return;
        }
        // Set konten modal
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalIcon").textContent = icon;
        document.getElementById("modalDescription").textContent = description;

        // Isi manfaat
        const benefitsList = document.getElementById("modalBenefits");
        benefitsList.innerHTML = "";
        details.benefits.forEach((benefit) => {
          const li = document.createElement("li");
          li.textContent = benefit;
          benefitsList.appendChild(li);
        });

        // Isi cara penggunaan
        const usageList = document.getElementById("modalUsage");
        usageList.innerHTML = "";
        details.usage.forEach((usage) => {
          const li = document.createElement("li");
          li.textContent = usage;
          usageList.appendChild(li);
        });

        // Isi peringatan
        const warningsList = document.getElementById("modalWarnings");
        warningsList.innerHTML = "";
        details.warnings.forEach((warning) => {
          const li = document.createElement("li");
          li.textContent = warning;
          warningsList.appendChild(li);
        });

        // Isi tips
        document.getElementById(
          "modalTips"
        ).innerHTML = `<strong>Tip:</strong> ${details.tips}`;

        // Tampilkan modal
        modal.style.display = "block";
        if (overlay) overlay.style.display = "block"; // Tampilkan overlay jika ada
        document.body.style.overflow = "hidden";

        const modalContentElement = modal.querySelector(".modal-content");
        if (modalContentElement) {
          modalContentElement.classList.remove(
            "modal-exit",
            "modal-exit-active"
          );
          modalContentElement.classList.add("modal-enter");
          setTimeout(() => {
            modalContentElement.classList.add("modal-enter-active");
          }, 10);
        }
      }

      // --- Close Modal Logic (No changes needed) ---
      function closeModal() {
        const modal = document.getElementById("detailModal");
        const overlay = document.getElementById("modalOverlay");
        if (modal && modal.style.display === "block") {
          const modalContentElement = modal.querySelector(".modal-content");
          if (modalContentElement) {
            modalContentElement.classList.remove(
              "modal-enter",
              "modal-enter-active"
            );
            modalContentElement.classList.add("modal-exit");
            setTimeout(() => {
              modalContentElement.classList.add("modal-exit-active");
              setTimeout(() => {
                modal.style.display = "none";
                if (overlay) overlay.style.display = "none";
                document.body.style.overflow = "auto";
                modalContentElement.classList.remove(
                  "modal-exit",
                  "modal-exit-active"
                );
              }, 300); // Match animation duration
            }, 10);
          } else {
            modal.style.display = "none";
            if (overlay) overlay.style.display = "none";
            document.body.style.overflow = "auto"; // Fallback if content element isn't found
          }
        }
      }

      document.addEventListener("keydown", function (event) {
        const modal = document.getElementById("detailModal");
        if (event.key === "Escape" || event.key === "Esc") {
          // 'Esc' untuk browser lama
          if (modal && modal.style.display === "block") {
            closeModal();
          }
        }
      });

      const modalOverlayElement = document.getElementById("modalOverlay");
      if (modalOverlayElement) {
        modalOverlayElement.addEventListener("click", function (event) {
          if (event.target === modalOverlayElement) {
            // Hanya tutup jika klik pada overlay langsung
            closeModal();
          }
        });
      }

      const closeModalButton = document.querySelector(
        "#detailModal .close-modal"
      );
      if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
      }
      // window.onclick = function (event) {
      //   // Ini untuk klik di luar modal, seharusnya klik di overlay
      //   const modal = document.getElementById("detailModal");
      //   if (event.target === modal) {
      //     // Ini akan menutup jika targetnya adalah elemen modal itu sendiri, bukan overlay
      //     closeModal();
      //   }
      // };

      // --- Initial Setup (No changes needed) ---
      window.onload = function () {
        const homePage = document.getElementById("home");
        if (homePage) {
          homePage.classList.add("active");
        }
      
        const homeNav = document.querySelector('.nav-link[data-page="home"]');
        if (homeNav) {
          homeNav.classList.add("active");
        }
      };
      

      // --- Hamburger Menu Toggle Logic ---
      const hamburgerMenu = document.getElementById("hamburgerMenu");
      const navLinksContainer = document.getElementById("navLinksContainer"); // Target the container
      const allNavLinks = navLinksContainer.querySelectorAll(".nav-link"); // Get links inside for closing menu

      if (hamburgerMenu && navLinksContainer) {
        hamburgerMenu.addEventListener("click", () => {
          navLinksContainer.classList.toggle("active");
          // Toggle aria-expanded attribute for accessibility
          const isExpanded = navLinksContainer.classList.contains("active");
          hamburgerMenu.setAttribute("aria-expanded", isExpanded.toString());
          hamburgerMenu.classList.toggle("active"); // For animating the hamburger icon itself
        });

        // Optional: Close the mobile menu when a navigation link is clicked
        allNavLinks.forEach((link) => {
          link.addEventListener("click", () => {
            // Check if the mobile menu is active (usually on smaller screens)
            if (
              window.innerWidth <= 768 &&
              navLinksContainer.classList.contains("active")
            ) {
              navLinksContainer.classList.remove("active");
              hamburgerMenu.setAttribute("aria-expanded", "false");
              hamburgerMenu.classList.remove("active");
            }
          });
        });

        function logout() {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("username");
          window.location.href = "index.html"; // arahkan ke halaman login
        }
  
      // Tampilkan nama user jika sudah login
  const username = localStorage.getItem("username");
  // Menampilkan dropdown user jika login
  if (username) {
    document.getElementById("loginNav")?.style.setProperty("display", "none");
    document.getElementById("userMenu")?.style.setProperty("display", "flex");
    document.getElementById("usernameDisplay").textContent = username;
  } else {
    document.getElementById("loginNav")?.style.setProperty("display", "inline-block");
    document.getElementById("userMenu")?.style.setProperty("display", "none");
  }

      
      // Sembunyikan tombol logout jika user belum login
      if (!localStorage.getItem("isLoggedIn")) {
          document.querySelectorAll(".logout-btn, .logout-link").forEach(btn => {
              btn.style.display = "none";
          });
      }
      }
