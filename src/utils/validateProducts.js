export const validateProducts = (product, fileRequired = true) => {
    const errors = {}

    if (!product.name.trim()) {
        errors.name = "El nomnbre del es obligatorio.";
    }

    if (!product.price.trim || product.price <= 0) {
        errors.price = "El precio debe ser mayor a cero."}

    if (!product.description.trim()) {
        errors.description = "La descripción es obligatoria."
    }

    if (!product.category.trim()) {
        errors.category = "La categoría es obligatoria."
    }

    if (fileRequired && !product.file) {
        errors.image = "La imagen es obligatoria."
    }

    return errors;

};