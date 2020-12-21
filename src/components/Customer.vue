<template>
  <tr class="flex flex-col border-2 border-white sm:border-0 flex-nowrap sm:flex-row mb-2 sm:mb-0">
      <td class="sm:w-1/5 border px-4 py-2 text-center">{{customer.nombre}}  {{customer.apellido}}</td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">{{customer.empresa}}</td>
      <td class="sm:w-2/5 border px-4 py-2 text-center">{{customer.email}}</td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">
            <button
                type="button" 
                class="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
            >
                Eliminar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
      </td>
      <td class="sm:w-1/5 border px-4 py-2 text-center">
            <button
                type="button"
                class="flex justify-center items-center bg-green-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
            >
                Editar
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
        </button>
      </td>
  </tr>
</template>

<script>
export default {
    props: {
        customer: {
            type: Object,
            required: true
        }
    }
}
</script>
