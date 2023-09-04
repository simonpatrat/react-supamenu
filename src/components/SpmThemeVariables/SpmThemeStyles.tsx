const SpmThemeStyles = ({
  accentColor,
  themeVariables,
}: {
  accentColor?: string;
  themeVariables?: string;
}) => {
  return (
    <>
      {accentColor && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --supamenu-accent-color: ${accentColor};
        }

        `,
          }}
        />
      )}
      {themeVariables && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .supamenu {
                ${themeVariables}
              }
        `,
          }}
        />
      )}
    </>
  );
};

export default SpmThemeStyles;
