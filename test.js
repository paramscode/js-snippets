function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const options = [];
  
    // Add past 4 years
    for (let year = currentYear - 4; year < currentYear; year++) {
      options.push({ value: year.toString(), label: year.toString() });
    }
  
    // Add current year and next year
    options.push({ value: currentYear.toString(), label: currentYear.toString() });
    options.push({ value: (currentYear + 1).toString(), label: (currentYear + 1).toString() });
  
    return options;
  }
  
  // Example usage
  const yearOptions = generateYearOptions();
  console.log(yearOptions);
  