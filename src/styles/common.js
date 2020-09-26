// IGNORE THIS STylesheet
// Dibikin biar akan" kita make stylesheet nya RN
const StyleSheet = {
  create(obj) {
    return { ...obj };
  }
};
// -------------------

export const StyledTextHeading = StyleSheet.create({
  fontSize: 32,
  fontWeight: "bold"
});

export const StyledTextBody = StyleSheet.create({
  fontSize: 14,
  fontWeight: "medium"
});

export const StyledCaption = StyleSheet.create({
  fontSize: 12,
  color: "#e8e8e8"
});

export const StyledContainer = StyleSheet.create({
  maxWidth: 1440,
  padding: 16,
  margin: "0 auto"
});

/**
 * @desc Dimension returns with and height for a component
 * @param {Number} width
 * @param {Number} height
 * @param {String} unit 'px', '%'
 * @return {Object}
 */
export const dimension = (width, height, unit) => {
  return StyleSheet.create({
    width: unit ? `${width}${unit}` : width,
    height: unit ? `${height}${unit}` : height
  });
};

/**
 *
 * @param {String} flexDirection
 * @param {String} justifyContent
 * @param {String} alignItems
 * @param {String} wrap
 * @return {Object}
 */
export const flex = (flexDirection, justifyContent, alignItems, wrap) => {
  return StyleSheet.create({
    display: "flex",
    flexDirection: flexDirection || "row",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "flex-start",
    wrap: wrap || "nowrap"
  });
};
