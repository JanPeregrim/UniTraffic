import tensorflow as tf
import pandas as pd

# loaded_model = tf.keras.models.load_model('big_model')
#
# AUTOTUNE = tf.data.experimental.AUTOTUNE
# BATCH_SIZE = 24
# IMAGE_SIZE = 299
#
#
# def load_image():
#     def _get_image(path: str) -> tf.Tensor:
#         image = tf.image.decode_jpeg(tf.io.read_file(path), channels=3)
#         image = tf.cast(image, dtype=tf.int32)
#         image = tf.image.resize_with_pad(image, IMAGE_SIZE, IMAGE_SIZE)
#
#         return tf.keras.applications.inception_resnet_v2.preprocess_input(image)
#
#     def _get_image_label(img: tf.Tensor, label: int) -> tuple:
#         return _get_image(img), label
#
#     return _get_image_label
#
#
# def reconstruct_path(image_id: int) -> str:
#     image_id = str(image_id).rjust(6, '0')
#     return f'kaggle/frames/frames/seq_{image_id}.jpg'
#
#
# def prepare_dataset(dataset):
#     image_read_fn = load_image()
#     dataset = dataset.map(image_read_fn, num_parallel_calls=AUTOTUNE)
#     return dataset.batch(BATCH_SIZE).prefetch(AUTOTUNE)
#
#
# META_FILE = "kaggle/labels.csv"
# data = pd.read_csv(META_FILE)
# data['path'] = data['id'].apply(reconstruct_path)
# data_valid = data.tail(300)
# ds_valid = tf.data.Dataset.from_tensor_slices((data_valid['path'], data_valid['count']))
# ds_valid = prepare_dataset(ds_valid)
#
#
# loaded_model.predict(ds_valid)

print('hello')
