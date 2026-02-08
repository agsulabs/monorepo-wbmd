if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/gaddar/.gradle/caches/8.13/transforms/47bcbd0e09082be04fb19d9d8b62209b/transformed/hermes-android-0.79.3-release/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/gaddar/.gradle/caches/8.13/transforms/47bcbd0e09082be04fb19d9d8b62209b/transformed/hermes-android-0.79.3-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

